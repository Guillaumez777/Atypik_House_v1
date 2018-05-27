Hi {{$name}},
<p>Your registration is completed. Please click the link toget access.</p>
{{ route('confirmation', $email_token) }}