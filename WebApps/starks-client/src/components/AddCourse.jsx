import { useEffect } from "react";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Course } from "../entities/course"
import { getData, saveData } from "../service/service";

export const AddCourse = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(new Course());
    const navigate = useNavigate();

    const getCourseData = async () => {
        const courseData = await getData('course', [{ key: 'id', value:  id }])
        const data = courseData.body[0];
        setCourse(new Course(Number(id), data.name, data.description, data.code));
    }

    useEffect(() => {
        if (id > 0) {
            getCourseData();
        }

    }, [id])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourse({ ...course, [name]: value });
    }

    const save = async () => {
        let method = 'POST';
        if (id > 0) {
            method = 'PUT';
        }

        await saveData('course', method, course);
        navigate('/home');
    }

    return (<div className="submit-form">
        <div>
            <div className="form-group">
                <label htmlFor="code">Code</label>
                <input type='text' className='form-control' required value={course.code} onChange={handleInputChange} name='code' />
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type='text' className='form-control' required value={course.name} onChange={handleInputChange} name='name' />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type='text' className='form-control' required value={course.description} onChange={handleInputChange} name='description' />
            </div>
            <button onClick={save} className="btn btn-success" >
                Submit
            </button>
        </div>
    </div>)
}