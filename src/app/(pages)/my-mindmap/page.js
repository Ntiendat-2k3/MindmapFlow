import { getServerSession } from "next-auth";
import { fetchMindmapList } from "@/app/api/actions/handleServerSide";

import options from "@/app/api/auth/[...nextauth]/options";
import ButtonAddMindmap from "./ButtonAddMindmap";
import MindmapGrid from "./MindmapGrid";

import "./style.scss";

export const metadata = {
  title: "My Mindmap Page",
  description: "Manage your mindmap list",
};

export default async function MyMindmapPage() {
  const session = await getServerSession(options);
  const mindmapList = await fetchMindmapList();

  return (
    <main className="my-mindmap-page">
      <div className="container">
        <div className="page-header">
            <h1 className="my-mindmap-page-heading">Mindmap của tôi</h1>
            <ButtonAddMindmap session={session} />
        </div>

        <MindmapGrid mindmapList={mindmapList} />
      </div>
    </main>
  );
}
