import { router } from '@inertiajs/react';
import React, { useRef } from 'react';


interface students {
    data: any


}

const EditForm = ({ data }: students) => {

    const formRef = useRef<HTMLFormElement>(null);



    const taskStore = (event: any) => {
        event.preventDefault();
        // Validate form data
        // ...

        const target = event.target;

        const sData = {

            name: target.name.value,
            age: target.age.value,
            id: data.id

        };

        router.post('/update', sData);


        if (formRef.current) {
            formRef.current.reset();
        }

        window.location.reload();

    }

    return (
        <div>
            <form ref={formRef} onSubmit={(e) => taskStore(e)}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label" >Name</label>
                    <input id='name' name='name' type="text" placeholder={data.name} className="form-control" aria-describedby="emailHelp" required />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input id='age' name='age' type="number" placeholder={data.age} className="form-control" required />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}

                </div>

                <button type="submit" className="mt-4 btn btn-primary col-12 d-grid bg-primary" >Change</button>
            </form>
        </div>
    )
}

export default EditForm
