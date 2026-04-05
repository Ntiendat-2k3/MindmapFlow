"use client"

import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { fetchDeleteMindmap } from "@/app/api/actions/handleClientSide"
import notify from '@/app/utils/notify'

export default function MindmapGrid({ session, mindmapList }) {
    const router = useRouter();

    const handleClickDelete = (id) => {
        const method = async () => {
            const response = await fetchDeleteMindmap(id);
            if (response) {
                notify("success", "Xóa mindmap thành công!");
                router.refresh();
            } else {
                notify("error", "Xóa mindmap thất bại!");
            }
        }

        notify("warning", "Bạn có chắc chắn muốn xóa mindmap này không?", true, method);
    }

    const handleClickEdit = (id) => {
        router.push(`/my-mindmap/${id}`);
    }

    if (mindmapList === "error") {
        return (
            <div className="empty-state">
                <div className="empty-icon">⚠️</div>
                <h3>Oops! Lỗi tải dữ liệu.</h3>
                <p>Không thể lấy dữ liệu từ máy chủ. Hãy thử lại sau.</p>
            </div>
        )
    }

    const userMindmaps = Array.isArray(mindmapList) 
        ? mindmapList.filter(mindmap => mindmap.email === session.user.email) 
        : [];

    if (userMindmaps.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">📝</div>
                <h3>Chưa có Mindmap nào</h3>
                <p>Bạn chưa tạo mindmap nào cả. Bấm "Thêm mới" để bắt đầu nhé!</p>
            </div>
        )
    }

    return (
        <div className="mindmap-grid">
            {userMindmaps.map(({ id, name, desc, created_at }) => (
                <div className="mindmap-card" key={id} onClick={() => handleClickEdit(id)}>
                    <div className="card-header">
                        <h4>{name}</h4>
                        <div className="card-actions">
                            <button 
                                className='btn-action btn-edit' 
                                onClick={(e) => { e.stopPropagation(); handleClickEdit(id) }}
                                title="Chỉnh sửa"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>
                            </button>

                            <button 
                                className='btn-action btn-delete' 
                                onClick={(e) => { e.stopPropagation(); handleClickDelete(id) }}
                                title="Xóa"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <p className="card-desc">{desc}</p>
                    
                    <div className="card-footer">
                        <span className="card-date">Tạo: {created_at}</span>
                    </div>
                </div> 
            ))}
        </div>
    )
}
