import React from 'react'
export default function Home() {
  return (
    <div className='text-center'>
        <header><h1>CRUD App With React Mongodb</h1></header>
        <div className="body">
            <div className="list_modal">
                <div className="modal_header">
                    <p>Task All Do Components</p>
                    <button>+</button>
                </div>
                <div className="modal_body">
                    <div className="modal_list">
                        <table>
                            <tr>
                                <td>STT</td>
                                <td>Task Name</td>
                                <td>Author</td>
                                <td>Function</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
