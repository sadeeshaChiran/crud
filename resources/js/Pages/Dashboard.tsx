
import { Head, Link, router } from '@inertiajs/react';

import { ChangeEvent, useRef, useState } from 'react';

import EditForm from './Dashbord/EditForm';





interface students {
    student: any[];

}


export default function Dashboard({ student }: students) {
    // form reset
    const formRef = useRef<HTMLFormElement>(null);

    // model cloase state
    const [showModal, setShowModal] = useState(true);

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedImage(file);
    };

    function taskStore(e: any) {


        e.preventDefault();

        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('name', e.target.name.value);
            formData.append('age', e.target.age.value);

            router.post('/add', formData);


            if (formRef.current) {
                formRef.current.reset();
            }



        }
        
    }


    const [targetData, setTargetData] = useState(student);


    const handleReset = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    // close model
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center row bg-dark-subtle">
                    <div className="mt-4 mb-4 col-lg-10">
                        <div className='row'>

                            <h1 className="col-6 fs-2 text-start page-title">Home</h1>


                        </div>

                    </div>
                </div>
                <div className='mt-5 col-10 offset-2'>

                    <button className='mt-2 mb-5 col-9 btn btn-primary' data-bs-toggle="modal" data-bs-target="#addModal">ADD</button>


                    <div className='row'>

                        {student.map(student =>

                            <div className="m-1 mt-3 col-3 card" key={student.key}>
                                <img src={student.image} className="card-img-top" alt="gtg" />
                                <div className="text-center card-body">
                                    <span className="mt-2 card-text fs-3 text-info">{student.name}</span>
                                    <br />
                                    <span className="mt-2 card-text fs-3 text-success">{student.age}</span>
                                    <br />

                                    <span className="mt-2 card-text fs-3">{student.status}</span>




                                    <Link href={route('student.status', { id: student.id })} className='mt-2 col-12 btn btn-outline-danger'>change</Link>
                                    <button data-bs-toggle="modal" data-bs-target='#editData'
                                        onClick={() => setTargetData(student)} className='mt-2 col-12 btn btn-outline-primary'>Edit</button>

                                    <Link href={route('student.delete', { id: student.id })} className='mt-2 col-12 btn btn-danger'>Delete</Link>

                                    {/* Add model */}
                                    <div className="modal fade " id="editData" tabIndex={-1} aria-labelledby="editModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="editModalLabel">Edit</h1>

                                                </div>
                                                <div className="modal-body">
                                                    <EditForm data={targetData} />
                                                </div>
                                                <div className="modal-footer">
                                                    <button onClick={handleReset} type="button" className="btn btn-secondary bg-secondary" data-bs-dismiss="modal">Close</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                        }
                    </div>

                </div>


                {/* Add model */}
                {showModal && (
                    <div className="modal " id="addModal" tabIndex={-1}  >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="addModalLabel">Modal title</h1>

                                </div>
                                <div className="modal-body">
                                    <form ref={formRef} onSubmit={(e) => taskStore(e)}>

                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input id='name' name='name' type="text" className="form-control" aria-describedby="emailHelp" required />
                                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="age" className="form-label">Age</label>
                                            <input id='age' name='age' type="number" className="form-control" required />
                                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}

                                        </div>


                                        <div className='mb-3'>
                                            <div className="mt-2 offset-lg-1 col-lg-10 ">

                                                <input type="file" name="image" className='col-lg-10 form-control '  onChange={handleImageChange} accept="image/*" />


                                            </div>
                                        </div>
                                        <button type="submit" className="mt-4 btn btn-primary col-12 d-grid bg-primary ">Submit</button>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button onClick={handleReset} type="button" className="btn btn-secondary bg-secondary" data-bs-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </>
    );
}

