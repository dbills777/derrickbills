<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource. ( all users)
     */
    public function index(Request $request)
    {
        $users = User::getLatestUsers();

        return Inertia::render('Users/Users', [
            'users' => $users,
        ]);
    }
}
