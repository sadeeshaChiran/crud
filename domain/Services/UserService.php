<?php

namespace domain\Services;


use App\Models\students;

class UserService
{
    protected $student;

    public function __construct()
    {
        $this->student = new students();
    }


    public function all()
    {

        return $this->student->all();
    }



    public function delete($id)
    {
        $student = $this->student->find($id);

        $student->delete();

    }


    public function add($data)
    {


        $this->student->create($data);

    }

    public function status($id)
    {
        $student = $this->student->find($id);

        if ($student->status == "active") {
            $student->status = "inactive";

        } else {
            $student->status = "active";

        }

        $student->update();


    }

    public function update(array $data, $id)
    {

        $student =  $this ->student->find($id);

        $student->update($this->edit($student, $data));


    }

    protected function edit(students $student, $data)
    {
        return array_merge($student->toArray(), $data);
    }

    // public function Action_active_images()
    // {

    //     return $this ->banner->Action_active_images();
    // }

    // public function store($data)
    // {

    //     if(isset($data->all()['image'])){


    //         imagesFacade::store($data);


    //     }



    //     $this->banner->create($data->all());

    // }

    // public function delete($banner_id)
    // {
    //     $student = $this->banner->find($banner_id);
    //     $task->delete();

    // }

    // public function done($banner_id)
    // {
    //     $task = $this->banner->find($banner_id);
        // if ($task->status == 0) {
        //     $task->status = 1;

        // } else {
        //     $task->status = 0;

        // }

    //     $task->update();

    // }
}
