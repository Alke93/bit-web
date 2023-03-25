import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { deleteData, getData } from "../service/service";

const Home = () => {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);

    const initData = async () => {
        const dataResult = await getData('studentsgrade')
        if (dataResult != null && dataResult.body != null && dataResult.body.length > 0) {
            setData(dataResult.body);
            const headersData = [];
            dataResult.body[0].courseGradeList.forEach(item => {
                headersData.push(item);
            })

            setHeaders(headersData);
        }
    }

    useEffect(() => {
        initData();
    }, [])

    const deleteObject = async (actionName = '', id = 0) => {
        await deleteData(actionName, id);
        await initData();
    }

    const setHeadersUI = () => {
        return headers.map(course => {
            const link = `/edit-course/${course.courseId}`;
            return (
                <td key={course.courseId}>
                    <span>{course.courseName}</span>
                    <Link to={link}>
                        <i className="far fa-edit action mr-2"></i>
                    </Link>
                    <span onClick={() => deleteObject('course', course.courseId)}>
                        <i className="fas fa-trash action"></i>
                    </span>
                </td>
            )
        })
    }

    const setStudentsUI = () => {
        return data.map(student => {
            return (
                <tr>
                    <td><span>{student.fullName}</span></td>
                    {
                        student.courseGradeList.map(course => {
                            if (!course.grade) {
                                return <td></td>
                            }

                            return <td>{course.grade.value}</td>
                        })
                    }
                </tr>
            )
        });
    }

    return (
        <div className="container">
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td></td>
                        {setHeadersUI()}
                    </tr>
                    {setStudentsUI()}
                </tbody>
            </table>
        </div>
    )
}

export default Home;