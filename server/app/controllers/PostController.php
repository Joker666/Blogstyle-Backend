<?php

use YOLO\UserUtils;

class PostController extends \BaseController {


    protected $userUtils;

    function __construct(UserUtils $userUtils)
    {
        $this->userUtils = $userUtils;
    }

    /**
	 * Display a listing of the resource.
	 * GET /post
	 *
	 * @return Response
	 */
	public function index()
	{
        $user = $this->userUtils->getCurrentUser();
        $name = $user->first_name . ' ' . $user->last_name;
        $user->load('posts');
        return Response::json(['status' => 200, 'posts' => $user->posts, 'name' => $name]);
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /post
	 *
	 * @return Response
	 */
	public function store()
	{
//        dd(Input::all());
        $post = new Post();
        $post->title = Input::get('title');
        $post->body = Input::get('body');
        $post->user_id = (int) Input::get('user_id');

        if($post->save()){
            return Response::json(['status' => 200, 'message' => 'saved successfully!', 'post' => $post]);
        }else{
            return Response::json(['status' => 400, 'message' => 'could not create new record!']);
        }
	}

    /**
     * Display the specified resource.
     * GET /post/{id}
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return Post::findOrFail($id);
    }

	/**
	 * Show the form for editing the specified resource.
	 * GET /post/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /post/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
//        dd(Input::all());
		$post = Post::findOrFail($id);
        $post->title = Input::get('title');
        $post->body = Input::get('body');

        if($post->save()){
            return Response::json(['status' => 200, 'message' => 'updated successfully!', 'post' => $post]);
        }else{
            return Response::json(['status' => 400, 'message' => 'could not update!']);
        }
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /post/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        $post = Post::findOrFail($id);
        $post->delete();
	}

}