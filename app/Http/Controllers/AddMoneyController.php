<?php
namespace App\Http\Controllers;
use App\Http\Requests;
use Illuminate\Http\Request;
use Validator;
use URL;
use Session;
use Redirect;
use Input;
use App\User;
use Stripe\Error\Card;
use Cartalyst\Stripe\Stripe;

class AddMoneyController extends Controller
{
    public function payWithStripe()
    {
        $prix = $_GET['prix'];
        $startdate = $_GET['start'];
        $enddate = $_GET['end'];
        return view('paywithstripe')->with('prix', $prix)->with('startdate', $startdate)->with('enddate', $enddate);
    }
    public function postPaymentWithStripe(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'card_no' => 'required',
            'ccExpiryMonth' => 'required',
            'ccExpiryYear' => 'required',
            'cvvNumber' => 'required',
            //'amount' => 'required',
        ]);
        $input = $request->all();
        if ($validator->passes()) { 
            $input = array_except($input,array('_token'));
            $stripe = Stripe::make('sk_test_O5i2wGUrXIk40JlTqI9gpCL4
            ');
            try {
            $token = $stripe->tokens()->create([
            'card' => [
                'number' => $request->get('card_no'),
                'exp_month' => $request->get('ccExpiryMonth'),
                'exp_year' => $request->get('ccExpiryYear'),
                'cvc' => $request->get('cvvNumber'),
            ],
            ]);
            
            if (!isset($token['id'])) {
                return redirect()->route('addmoney.paywithstripe');
            }
            $charge = $stripe->charges()->create([
                'card' => $token['id'],
                'currency' => 'EUR',
                'amount' => $request->prix,
                'description' => 'Add in wallet',
            ]);
            
            if($charge['status'] == 'succeeded') {
                /**
                 * Write Here Your Database insert logic.
                 */
                return redirect('/');
            } else {
                \Session::put('error','Money not add in wallet!!');
                //return redirect()->route('addmoney.paywithstripe');
            }
            } catch (Exception $e) {
                \Session::put('error',$e->getMessage());
                //return redirect()->route('addmoney.paywithstripe');
            } catch(\Cartalyst\Stripe\Exception\CardErrorException $e) {
                \Session::put('error',$e->getMessage());
                //return redirect()->route('addmoney.paywithstripe');
            } catch(\Cartalyst\Stripe\Exception\MissingParameterException $e) {
                \Session::put('error',$e->getMessage());
                //return redirect()->route('addmoney.paywithstripe');
            }
        }
    }
}