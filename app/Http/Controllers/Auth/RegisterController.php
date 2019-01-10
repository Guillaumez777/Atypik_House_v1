<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use App\Jobs\SendVerificationEmail;
use App\User;
use App\Mail\EmailVerification;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Validator;
use Mail;

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
            'nom' => 'required|alpha|max:50',
            'prenom' => 'required|alpha|max:50',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'g-recaptcha-response' => 'required|captcha'
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
            'prenom' => $data['prenom'],
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

        $validator = $this->validate($request, [
            'nom' => 'required|max:30|regex:/^[\pL\s\-]+$/u',
            'prenom' => 'required|min:1|max:30|regex:/^[\pL\s\-]+$/u',
            'email' => 'required|unique:users|max:30',
            'email_confirmation' => 'required|same:email|max:30',
            'password' => 'required|min:8|max:30',
            'password_confirmation' => 'required|same:password|max:30',
            'g-recaptcha-response'=>'required|captcha'
        ]);
        
            $data = $this->create($input)->toArray();

            $data['email_token'] = str_random(25);

            $user = User::find($data['id']);
            $user->email_token = $data['email_token'];
            $user->prenom = $data["prenom"];
            $user->save();
            
            /*Mail::send('email.confirmation', $data,function($message) use($data){
                $message->to($data['email']);
                $message->subject('Confirmation inscription');
            });*/
            return redirect(route('login'))->with('status', 'Merci pour votre inscription, vous pouvez dès à présent vous connecter sur le site.');
        //return redirect(route('login'))->with('status', $validator->errors());
    }

    public function confirmation($email_token) {
        $user = User::where('email_token', $email_token)->first();

        if (!is_null($user)) {
            $user->verified = 1;
            $user->email_token;
            $user->save();
            return redirect(route('login'))->with('status', 'Votre compte a été activé');
        }
        return redirect(route('login'))->with('status', 'Quelque chose ne va pas');
    }

    
    /**
    * Handle a registration request for the application.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    // public function register(Request $request)
    // {
    //     $this->validator($request->all())->validate();
    //     event(new Registered($user = $this->create($request->all())));
    //     dispatch(new SendVerificationEmail($user));
    //     return view('verification');
    // }

    /**
     * Handle a registration request for the application.
     *
     * @param $token
     * @return \Illuminate\Http\Response
     */
    
    protected function verify($token)
    {
        $user = User::where('email_token', $token)->first();
        $user->verified = 1;
        var_dump($user->verified);
        if($user->save()){
            return view('emailconfirm',['user'=> $user]);
        }
    }
}
