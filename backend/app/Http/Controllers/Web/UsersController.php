<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    /**
     * Display a listing of the users, optionally filtered by username, email, and name.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = User::where('id', '!=', auth()->user()->id);

        if (!empty($request->username)) {
            $users = $users->where('username', 'LIKE', '%' . $request->username . '%');
        }

        if (!empty($request->email)) {
            $users = $users->where('email', 'LIKE', '%' . $request->email . '%');
        }

        if (!empty($request->name)) {
            $users = $users->where('name', 'LIKE', '%' . $request->name . '%');
        }

        $users = $users->paginate(10);

        return view('pages.users.index', [
            'users' => $users,
            'search_terms' => [
                'username' => $request->username,
                'email' => $request->email,
                'name' => $request->name,
            ]
        ]);
    }

    /**
     * Show the form for creating a new user.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('pages.users.create');
    }

    /**
     * Store a newly created user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'username' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'phone_number' => 'nullable|string|max:20',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'phone_number' => $request->phone_number,
        ]);

        return redirect()->route('users.show', [
            $user
        ])->with('success_message', 'User created successfully.');
    }

    /**
     * Display the specified user.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return view('pages.users.show', [
            'user' => $user
        ]);
    }

    /**
     * Show the form for editing the specified user.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        abort(404);
    }

    /**
     * Update the specified user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'username' => 'required|string|max:255|unique:users,username,' . $user->id,
            'password' => 'nullable|string|min:8|confirmed',
            'phone_number' => 'nullable|string|max:20',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'phone_number' => $request->phone_number,
        ]);

        if (!empty($request->password)) {
            $user->update([
                'password' => Hash::make($request->password),
            ]);
        }

        return redirect()->route('users.show', [
            $user
        ])->with('success_message', 'User updated successfully.');
    }

    /**
     * Remove the specified user from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('users.index')->with('success_message', 'User deleted successfully.');
    }
}
