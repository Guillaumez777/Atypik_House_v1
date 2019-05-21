@extends('layouts.app')
@section('title', 'Politique de confidentialité')
@section('content')
<div class="container-fluid banner">
    <div class="intro-body">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                            <form class="form-horizontal" method="get" action="{{url('search')}}" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <h1 class="title title-intro">Trouvez les meilleurs locations atypique, <br />partout en Europe !</h1>
                                        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-3 col-sm-9 col-sm-offset-1">
                                            <div class="form-group button2">
                                                @include('search',['url'=>'search','link'=>'search'])
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container list-category cgv">
    <h2>Conditions générale de vente</h2>
    <div class="row">
        <div class="container cgv">
                <h2>Clause n° 1 : Objet</h2>
                <p>Les conditions générales de vente décrites ci-après détaillent les droits et obligations de la société et de son client dans le cadre de la vente des marchandises et services.
                Toute prestation accomplie par la société implique donc l'adhésion sans réserve de l'acheteur aux présentes conditions générales de vente.</p>
                <h2>Clause n° 2 : Prix</h2>
                <p>Les prix des marchandises vendues sont ceux en vigueur au jour de la prise de commande. Ils sont libellés en euros et calculés hors taxes. Par voie de conséquence, ils seront majorés du taux de TVA et des frais de transport applicables au jour de la commande.
                La société s'accorde le droit de modifier ses tarifs à tout moment. Toutefois, elle s'engage à facturer les marchandises commandées aux prix indiqués lors de l'enregistrement de la commande.</p>
                <h2>Clause n° 3 : Rabais et ristournes</h2>
                <p>Les tarifs proposés comprennent les rabais et ristournes que la société serait amenée à octroyer compte tenu de ses résultats ou de la prise en charge par l'acheteur de certaines prestations.</p>
                <h2>Clause n° 4 : Escompte</h2>
                <p>Aucun escompte ne sera consenti en cas de paiement anticipé.</p>
                <h2>Clause n° 5 : Modalités de paiement</h2>
                <p> Le règlement des commandes s'effectue :
                
                        soit par chèque ;
                        soit par carte bancaire ;
                        le cas échéant, indiquer les autres moyens de paiement acceptés.
                        Lors de l'enregistrement de la commande, l'acheteur devra verser un acompte de 10% du montant global de la facture, le solde devant être payé à réception des marchandises.</p>

                <h2>Clause n° 6 : Retard de paiement</h2>
                <p>En cas de défaut de paiement total ou partiel des marchandises livrées au jour de la réception, l'acheteur doit verser à la société une pénalité de retard égale à trois fois le taux de l'intérêt légal.
                        Le taux de l'intérêt légal retenu est celui en vigueur au jour de la livraison des marchandises.
                        
                        A compter du 1er janvier 2015, le taux d'intérêt légal sera révisé tous les 6 mois (Ordonnance n°2014-947 du 20 août 2014).
                        
                        Cette pénalité est calculée sur le montant TTC de la somme restant due, et court à compter de la date d'échéance du prix sans qu'aucune mise en demeure préalable ne soit nécessaire.
                        En sus des indemnités de retard, toute somme, y compris l’acompte, non payée à sa date d’exigibilité produira de plein droit le paiement d’une indemnité forfaitaire de 40 euros due au titre des frais de recouvrement.
                        Articles 441-6, I alinéa 12 et D. 441-5 du code de commerce.</p>

                <h2>Clause n° 7 : Clause résolutoire</h2>
                <p>Si dans les quinze jours qui suivent la mise en oeuvre de la clause " Retard de paiement ", l'acheteur ne s'est pas acquitté des sommes restant dues, la vente sera résolue de plein droit et pourra ouvrir droit à l'allocation de dommages et intérêts au profit de la société.</p>
                <h2>Clause n° 8 : Clause de réserve de propriété</h2>
                <p>La société conserve la propriété des biens vendus jusqu'au paiement intégral du prix, en principal et en accessoires. À ce titre, si l'acheteur fait l'objet d'un redressement ou d'une liquidation judiciaire, la société se réserve le droit de revendiquer, dans le cadre de la procédure collective, les marchandises vendues et restées impayées.</p>
                <h2>Clause n° 9 : Livraison</h2>
                <p>La livraison est effectuée :
                
                        soit par la remise directe de la marchandise à l'acheteur ;
                        soit par l'envoi d'un avis de mise à disposition en magasin à l'attention de l'acheteur ;
                        soit au lieu indiqué par l'acheteur sur le bon de commande.
                        Le délai de livraison indiqué lors de l'enregistrement de la commande n'est donné qu'à titre indicatif et n'est aucunement garanti.
                        Par voie de conséquence, tout retard raisonnable dans la livraison des produits ne pourra pas donner lieu au profit de l'acheteur à :
                        l'allocation de dommages et intérêts ;
                        l'annulation de la commande.
                        Le risque du transport est supporté en totalité par l'acheteur.
                        En cas de marchandises manquantes ou détériorées lors du transport, l'acheteur devra formuler toutes les réserves nécessaires sur le bon de commande à réception desdites marchandises. Ces réserves devront être, en outre, confirmées par écrit dans les cinq jours suivant la livraison, par courrier recommandé AR.</p>
                <h2>Clause n° 10 : Force majeure</h2>
                <p>La responsabilité de la société ne pourra pas être mise en oeuvre si la non-exécution ou le retard dans l'exécution de l'une de ses obligations décrites dans les présentes conditions générales de vente découle d'un cas de force majeure. À ce titre, la force majeure s'entend de tout événement extérieur, imprévisible et irrésistible au sens de l'article 1148 du Code civil.</p>
                <h2>Clause n° 11 : Tribunal compétent</h2>
                <p>Tout litige relatif à l'interprétation et à l'exécution des présentes conditions générales de vente est soumis au droit français.
                        À défaut de résolution amiable, le litige sera porté devant le Tribunal de commerce.
                         
                        Fait à Rambouillet (ville), le 21 mai 2019
                       </p>

        </div>
    </div>
</div>
@endsection
