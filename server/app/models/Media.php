<?php

class Media extends \Eloquent {
	protected $fillable = ['id', 'title', 'media', 'mime'];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'media';
}