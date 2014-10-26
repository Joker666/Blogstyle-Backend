<?php

class MediaController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /media
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /media
	 *
	 * @return Response
	 */
	public function store()
	{
        $date = new Date();
		$media = new Media;
        $allowedExts = array("gif", "jpeg", "jpg", "png", 'JPG', 'JPEG', 'PNG', 'GIF');
        $file = Input::file('file');
        $extension = $file->getClientOriginalExtension();
        if(in_array($extension, $allowedExts)){
            //Create Filename
            $filename = date('Y-m-d-H-i-s-') . $file->getClientOriginalName();

            //Initialize Paths
            $assetPath = 'uploads/';
            $destinationPath = public_path($assetPath);
            $yearDir = $destinationPath . $date->year . '/';
            $monthDir = $yearDir . $date->month . '/';
            $dayDir = $monthDir . $date->day . '/';

            //Loop Through The Array To Populate Directories
            $dirArray = [$destinationPath, $yearDir, $monthDir, $dayDir];

            foreach($dirArray as $dir) {
                if(!is_dir($dir)) {
                    File::makeDirectory($dir, 0777, true);
                }
            }

            $temp = explode(".", $file->getClientOriginalName());
            $media->title = $temp[0];
            $media->media = $filename;
            $media->mime = $file->getMimeType();

            $upload_success = Image::make($file)->save($dayDir .'/' .$filename);

            $returnPath = url("/uploads/" . $date->year . '/' . $date->month . '/' .$date->day . '/' . $filename);
            if( $upload_success ) {
                $media->save();
                return Response::json(['link' => $returnPath, 'message' => 'saved successfully!']);
            }
        }
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /media/{id}/edit
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
	 * PUT /media/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /media/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}