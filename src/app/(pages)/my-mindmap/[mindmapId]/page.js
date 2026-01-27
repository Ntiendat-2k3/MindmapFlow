import { Fragment } from "react";
import FlowProvier from "./Flow";

import { getServerSession } from "next-auth";
import { fetchMindmap } from "@/app/api/actions/handleServerSide";

import options from "@/app/api/auth/[...nextauth]/options";

export const generateMetadata = async ({ params }) => {
    const { mindmapId } = params
    const mindmap = await fetchMindmap(mindmapId);

    return {
        title: mindmap.isAccessible ? mindmap.metadata.title : mindmap.name,
        description: mindmap.metadata.description,
        openGraph: {
            images: [mindmap.metadata.image],
        }
    }
}

function isObject(value) {
    return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
    );
}

export default async function MindmapPage({ params }) {
    const { mindmapId } = params;
    const session = await getServerSession(options);
    const mindmap = await fetchMindmap(mindmapId);

    return (
        <Fragment>
            {
                (mindmap === "error" || Object.keys(mindmap).length === 0) ? 
                (
                    <h3>Lỗi tải mindmap</h3>
                ) :
                (isObject(mindmap) && Object.keys(mindmap).length > 0) &&
                (
                    <FlowProvier mindmap={ mindmap } session={ session } />
                )
            }
        </Fragment>
    )
}