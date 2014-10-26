<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach(range(1, 1) as $index)
		{
			User::create([
                'email' => 'mr.k779@gmail.com',
                'username' => 'joker666',
                'first_name' => 'Hasan',
                'last_name' => 'Rafi',
                'password' => Hash::make('naughty5'),
			]);
		}
	}

}