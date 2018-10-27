@foreach ($user as $profile)
    <p>Nom {{ $profile->nom }}</p>
    <p>Prenom {{ $profile->prenom }}</p>
    <p>Email {{ $profile->email }}</p>
@endforeach