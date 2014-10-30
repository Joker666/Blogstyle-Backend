<?php

class Media extends \Eloquent {
	protected $fillable = ['id', 'title', 'media', 'mime'];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'media';

    public function user()
    {
        return $this->belongsTo('User');
    }

    public function post()
    {
        return $this->belongsTo('Post');
    }
}