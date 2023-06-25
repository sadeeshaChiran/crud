import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="container">
                <div className="d-flex justify-content-center row bg-dark-subtle">
                    <div className="mt-4 mb-4 col-lg-10">
                        <div className='row'>

                            <h1 className="col-10 fs-2 text-start page-title">Register</h1>

                            <div className='mt-2 col-2 text-end'>

                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="fs-3 fw-bold text-success"
                                    >
                                        Home Page
                                    </Link>
                                ) : (

                                    <div className='row'>
                                        <Link href={route('login')} className="col-6 fs-5 text-end page-title fw-lighter text-success">Login</Link>
                                        <Link href={route('register')} className="col-6 fs-5 text-end page-title fw-lighter text-danger">Register</Link>
                                    </div>


                                )}


                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </>
    );
}
