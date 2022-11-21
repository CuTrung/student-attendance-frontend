import { useState } from "react";
import { toast } from 'react-toastify';


const Manage = (props) => {
    const [majors, setMajors] = useState([]);

    // Khi login success, sẽ gửi teacherId để lọc ra majors teacher đang dạy 
    const getAllMajors = async () => {
        try {
            let data = await axios.get(`api/majors`);
            if (data && data.EC === 0) {
                toast.success(data.EM);
                setMajors(data.DT);
            }
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <div className="w-100 mt-3 d-flex gap-3 justify-content-center ">
                <select className="form-select w-25" aria-label="Default select example">
                    <option>Chose ngành học</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <select className="form-select w-25" aria-label="Default select example">
                    <option>Chose nhóm lớp</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <button className="search btn btn-warning">Tìm</button>
            </div>



            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Time</th>
                        <th scope="col">Số học sinh vắng</th>
                        <th scope="col">Số học sinh trễ</th>
                        <th scope="col">Số học sinh gian dối</th>
                        <th scope="col">Xem thêm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>
                            <button className="btn btn-secondary">Xem chi tiết</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default Manage;