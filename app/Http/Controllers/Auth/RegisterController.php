<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use App\Jobs\SendVerificationEmail;
use App\User;
use App\Mail\EmailVerification;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\RegistersUsers;
//use Bestmomo\LaravelEmailConfirmation\Traits\RegistersUsers;
use Illuminate\Support\Facades\Validator;
use Mail;
use Illuminate\Validation\Validator\Errors;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'nom' => $data['nom'],
            //'prenom' => $data['prenom'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'email_token' => base64_encode($data['email'])
        ]);
    }

    /**
    * Handle a registration request for the application.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    protected function register(Request $request)
    {
        $input = $request->all();
        $validator = $this->validator($input);
        if ($validator->passes()) {
            $data = $this->create($input)->toArray();

            $data['email_token'] = str_random(25);

            $user = User::find($data['id']);
            $user->email_token = $data['email_token'];
            $user->save();

            Mail::send('mails.confirmation', $data, function($message) use($data){
                $message->to($data['email']);
                $message->subject('Registration Confirmation');
            });
            return redirect(route('login'))->with('status', 'Confirmation email has been send. Please check your email');
        }
        return redirect(route('login'))->with('status', $validator->errors());
    }

    public function confirmation($email_token) {
        $user = User::where('email_token', $email_token)->first();

        if (!isnull($user)) {
            $user->verified = 1;
            $user->email_token;
            $user->save();
            return redirect(route('login'))->with('status', 'Your activation is completed.');
        }
        return redirect(route('login'))->with('status', 'Something went wrong.');
    }

    // /**
    //  * Handle a registration request for the application.
    //  *
    //  * @param $token
    //  * @return \Illuminate\Http\Response
    //  */
    
    // public function verify($token)
    // {
    //     $user = User::where('email_token', $token)->first();
    //     $user->verified = 1;
    //     var_dump($user->verified);
    //     if($user->save()){
    //         return view('emailconfirm',['user'=> $user]);
    //     }
    // }
}
