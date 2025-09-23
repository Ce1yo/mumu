// Données des produits (à remplacer par une vraie base de données en production)
const productsData = {
    // Goûts de granité
    'granite-barbe-a-papa': {
        title: 'Barbe à Papa',
        price: '3,50 €',
        image: 'images/Gouts granite/1 baniere granité barbe a papa.png',
        description: 'Un délicieux granité au goût de barbe à papa, doux et sucré comme à la fête foraine. Parfait pour les amateurs de saveurs sucrées et régressives.',
        specs: [
            { name: 'Type', value: 'Sucré' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-citron': {
        title: 'Citron',
        price: '3,50 €',
        image: 'images/Gouts granite/2 baniere granité citron.png',
        description: 'Un granité acidulé et rafraîchissant au goût de citron jaune pressé. Idéal pour se désaltérer lors des chaudes journées d\'été.',
        specs: [
            { name: 'Type', value: 'Acidulé' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-fraise': {
        title: 'Fraise',
        price: '3,50 €',
        image: 'images/Gouts granite/3 baniere granité fraise.png',
        description: 'Un granité doux et fruité au goût de fraise fraîche. Un classique apprécié des petits et des grands.',
        specs: [
            { name: 'Type', value: 'Fruité' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-kiwi-banane': {
        title: 'Kiwi Banane',
        price: '3,80 €',
        image: 'images/Gouts granite/4 baniere granité kiwi banane.png',
        description: 'Un savoureux mélange exotique de kiwi et de banane, équilibré entre acidité et douceur.',
        specs: [
            { name: 'Type', value: 'Exotique' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-cola': {
        title: 'Cola',
        price: '3,50 €',
        image: 'images/Gouts granite/5 baniere granité cola.png',
        description: 'Un granité au goût de cola classique, pétillant et rafraîchissant. Un incontournable pour les amateurs de saveurs familières.',
        specs: [
            { name: 'Type', value: 'Classique' },
            { name: 'Caféine', value: 'Oui' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-mangue': {
        title: 'Mangue',
        price: '3,80 €',
        image: 'images/Gouts granite/6 baniere granité mangue.png',
        description: 'Un granité exotique et sucré au goût de mangue mûre. Un voyage gustatif sous les tropiques.',
        specs: [
            { name: 'Type', value: 'Exotique' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-mangue-goyave': {
        title: 'Mangue Goyave',
        price: '3,90 €',
        image: 'images/Gouts granite/7 naniere granité mangue goyave.png',
        description: 'Un délicieux mélange tropical de mangue et de goyave, à la fois doux et légèrement acidulé.',
        specs: [
            { name: 'Type', value: 'Tropical' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-melon': {
        title: 'Melon',
        price: '3,70 €',
        image: 'images/Gouts granite/8 baniere granité melon.png',
        description: 'Un granité doux et désaltérant au goût de melon frais. Parfait pour un moment de fraîcheur estivale.',
        specs: [
            { name: 'Type', value: 'Fruité' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-melon-mangue': {
        title: 'Melon Mangue',
        price: '3,90 €',
        image: 'images/Gouts granite/9 baniere granité melon mangue.png',
        description: 'Une harmonie parfaite entre la douceur du melon et l\'exotisme de la mangue pour un granité rafraîchissant et savoureux.',
        specs: [
            { name: 'Type', value: 'Fruité' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-orange-sanguine': {
        title: 'Orange Sanguine',
        price: '3,60 €',
        image: 'images/Gouts granite/10 baniere granité orange sanguine.png',
        description: 'Un granité à l\'orange sanguine, doux avec une légère touche acidulée. Une explosion de fraîcheur en bouche.',
        specs: [
            { name: 'Type', value: 'Agrume' },
            { name: 'Allergènes', value: 'Agrumes' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-fruit-passion': {
        title: 'Fruit de la Passion',
        price: '3,80 €',
        image: 'images/Gouts granite/11 baniere granité passion.png',
        description: 'Un granité intense et acidulé au fruit de la passion, pour les amateurs de saveurs exotiques et marquées.',
        specs: [
            { name: 'Type', value: 'Acidulé' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-pasteque': {
        title: 'Pastèque',
        price: '3,50 €',
        image: 'images/Gouts granite/12 baniere granité pasteque.png',
        description: 'Un granité léger et rafraîchissant au goût de pastèque, idéal pour se désaltérer tout en douceur.',
        specs: [
            { name: 'Type', value: 'Léger' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-pomme-verte': {
        title: 'Pomme Verte',
        price: '3,50 €',
        image: 'images/Gouts granite/13 baniere granité pomme verte.png',
        description: 'Un granité à la pomme verte, frais et légèrement acidulé. Une touche de fraîcheur garantie à chaque dégustation.',
        specs: [
            { name: 'Type', value: 'Frais' },
            { name: 'Allergènes', value: 'Sans allergènes majeurs' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-the-peche': {
        title: 'Thé Pêche',
        price: '3,70 €',
        image: 'images/Gouts granite/14 baniere granité thé peche.png',
        description: 'Un délicat mélange de thé léger et de pêche mûre pour un granité subtil et parfumé. Parfait pour les amateurs de saveurs raffinées.',
        specs: [
            { name: 'Type', value: 'Parfumé' },
            { name: 'Théine', value: 'Oui' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-tropical-bleu': {
        title: 'Tropical Bleu',
        price: '3,90 €',
        image: 'images/Gouts granite/15 baniere granité tropical bleue.png',
        description: 'Un mélange exotique et surprenant de fruits tropicaux avec une touche de fruit de la passion. Sa couleur bleue en fait une expérience à la fois visuelle et gustative unique.',
        specs: [
            { name: 'Type', value: 'Exotique' },
            { name: 'Couleur', value: 'Bleu naturel' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'granite-menthe-verte': {
        title: 'Menthe Verte',
        price: '3,50 €',
        image: 'images/Gouts granite/16 baniere granité menthe verte.png',
        description: 'Une explosion de fraîcheur avec ce granité à la menthe verte. Idéal pour se rafraîchir après un repas ou simplement pour le plaisir d\'une note mentholée intense.',
        specs: [
            { name: 'Type', value: 'Rafraîchissant' },
            { name: 'Mentholé', value: 'Oui' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    // Machines à glaces
    'machine-comptoir': {
        title: 'Machine de table MT 150',
        price: '2 000,00 € HT',
        image: 'images/Machines a glaces/comptoir.png',
        description: 'Machine à glace italienne sur comptoir, idéale pour les espaces restreints. Débit de 100 à 150 glaces/heure.',
        specs: [
            { name: 'Type', value: 'Sur comptoir MT' },
            { name: 'Débit', value: '100-150 glaces/heure' },
            { name: 'Puissance', value: '0,75 kW' },
            { name: 'Dimensions', value: '40 x 60 x 50 cm' },
            { name: 'Poids', value: '35 kg' }
        ]
    },
    'machine-pieds': {
        title: 'Machine debout MD 150',
        price: '2 100,00 € HT',
        image: 'images/Machines a glaces/debout.png',
        description: 'Machine à glace italienne sur pieds, offrant une capacité de 150 glaces/heure. Parfaite pour les établissements à fort trafic.',
        specs: [
            { name: 'Type', value: 'Sur pieds MD' },
            { name: 'Débit', value: '150 glaces/heure' },
            { name: 'Puissance', value: '1,1 kW' },
            { name: 'Dimensions', value: '45 x 70 x 150 cm' },
            { name: 'Poids', value: '85 kg' }
        ]
    },
    'machine-economique': {
        title: 'Machine de table MT 200',
        price: '2 100,00 € HT',
        image: 'images/Machines a glaces/comptoir.png',
        description: 'Solution économique avec un débit de 150 à 200 glaces/heure. Idéale pour les petits espaces et les débutants.',
        specs: [
            { name: 'Type', value: 'Sur comptoir MT' },
            { name: 'Débit', value: '150-200 glaces/heure' },
            { name: 'Puissance', value: '0,8 kW' },
            { name: 'Dimensions', value: '35 x 55 x 45 cm' },
            { name: 'Poids', value: '28 kg' }
        ]
    },
    'machine-professionnelle': {
        title: 'Machine debout MD 200',
        price: '2 200,00 € HT',
        image: 'images/Machines a glaces/debout.png',
        description: 'Modèle professionnel avec un débit de 200 glaces/heure. Technologie de refroidissement avancée pour une production intensive.',
        specs: [
            { name: 'Type', value: 'Sur pieds MD' },
            { name: 'Débit', value: '200 glaces/heure' },
            { name: 'Puissance', value: '1,5 kW' },
            { name: 'Dimensions', value: '50 x 80 x 160 cm' },
            { name: 'Poids', value: '95 kg' }
        ]
    },
    'machine-compacte': {
        title: 'Machine debout MD25-300',
        price: '2 300,00 € HT',
        image: 'images/Machines a glaces/comptoir.png',
        description: 'Modèle compact avec un débit de 300 glaces/heure. Idéale pour les bars et cafés avec un espace limité.',
        specs: [
            { name: 'Type', value: 'Sur pieds MD25' },
            { name: 'Débit', value: '300 glaces/heure' },
            { name: 'Puissance', value: '1,8 kW' },
            { name: 'Dimensions', value: '50 x 75 x 160 cm' },
            { name: 'Poids', value: '90 kg' },
            { name: 'Alimentation', value: '220-240V / 50Hz' },
            { name: 'Garantie', value: '2 ans' }
        ]
    },
    'machine-premium': {
        title: 'Machine debout à pompe MDP 300',
        price: '2 500,00 € HT',
        image: 'images/Machines a glaces/debout.png',
        description: 'Modèle haut de gamme avec un débit de 300 glaces/heure. Fonctionnalités avancées pour les professionnels exigeants.',
        specs: [
            { name: 'Type', value: 'Sur pieds MDP' },
            { name: 'Débit', value: '300 glaces/heure' },
            { name: 'Puissance', value: '1,8 kW' },
            { name: 'Dimensions', value: '55 x 80 x 165 cm' },
            { name: 'Poids', value: '100 kg' },
            { name: 'Alimentation', value: '220-240V / 50Hz' },
            { name: 'Garantie', value: '2 ans' }
        ]
    },
    'machine-italienne-pro': {
        title: 'Machine debout à pompe MDP 400',
        price: '2 600,00 € HT',
        image: 'images/Machines a glaces/debout.png',
        description: 'Modèle professionnel avec un débit de 400 glaces/heure. Fabriquée selon les standards italiens les plus stricts pour une qualité exceptionnelle.',
        specs: [
            { name: 'Type', value: 'Sur pieds MDP' },
            { name: 'Débit', value: '400 glaces/heure' },
            { name: 'Puissance', value: '2,0 kW' },
            { name: 'Dimensions', value: '58 x 85 x 170 cm' },
            { name: 'Poids', value: '110 kg' },
            { name: 'Alimentation', value: '220-240V / 50Hz' },
            { name: 'Garantie', value: '2 ans' }
        ]
    },
    'machine-haute-performance': {
        title: 'Machine debout MD25-400',
        price: '2 400,00 € HT',
        image: 'images/Machines a glaces/debout.png',
        description: 'Modèle haute performance avec un débit de 400 glaces/heure. Technologie de refroidissement avancée pour une production intensive.',
        specs: [
            { name: 'Type', value: 'Sur pieds MD25' },
            { name: 'Débit', value: '400 glaces/heure' },
            { name: 'Puissance', value: '2,2 kW' },
            { name: 'Dimensions', value: '60 x 90 x 180 cm' },
            { name: 'Poids', value: '120 kg' },
            { name: 'Alimentation', value: '380V triphasé' },
            { name: 'Garantie', value: '2 ans' }
        ]
    },
    'machine-granite-pro': {
        title: 'Machine à Granité Professionnelle',
        price: '1 700 €',
        image: 'images/Machines a granite/granite.png',
        description: 'Machine à granité professionnelle de haute qualité, idéale pour les bars, restaurants et événements. Production rapide et constante de granité parfaitement granuleux.',
        specs: [
            { name: 'Type', value: 'Professionnelle' },
            { name: 'Capacité', value: '3 bacs de 8 litres' },
            { name: 'Puissance', value: '0,9 kW' },
            { name: 'Dimensions', value: '45 x 65 x 140 cm' },
            { name: 'Poids', value: '55 kg' },
            { name: 'Alimentation', value: '220-240V / 50Hz' },
            { name: 'Garantie', value: '2 ans' },
            { name: 'Production', value: 'Jusqu\'à 60 verres/heure' },
            { name: 'Matériau', value: 'Acier inoxydable' },
            { name: 'Fonctionnalités', value: 'Régulation de température, affichage numérique, système de nettoyage intégré' }
        ]
    },
    'machine-pieds': {
        title: 'Machine sur Pieds MD 150',
        price: '2 100,00 € HT',
        image: 'images/Machines a glaces/debout.png',
        description: 'Notre modèle sur pieds offre une grande capacité de production, idéal pour les établissements à fort trafic. Son système de refroidissement avancé assure des performances optimales même en période d\'affluence.',
        specs: [
            { name: 'Capacité', value: '4 parfums' },
            { name: 'Puissance', value: '1.2 kW' },
            { name: 'Dimensions', value: '50 x 60 x 150 cm' },
            { name: 'Poids', value: '45 kg' },
            { name: 'Alimentation', value: '220-240V / 50Hz' },
            { name: 'Garantie', value: '2 ans' }
        ]
    },
    'machine-economique': {
        title: 'Machine Économique',
        price: '999,00 €',
        image: 'images/Machines a glaces/comptoir.png',
        description: 'Notre modèle économique parfait pour les petits budgets. Idéale pour les débutants ou les petits commerces qui démarrent.',
        specs: [
            { name: 'Capacité', value: '2 parfums' },
            { name: 'Puissance', value: '0.5 kW' },
            { name: 'Dimensions', value: '35 x 40 x 50 cm' },
            { name: 'Poids', value: '20 kg' },
            { name: 'Alimentation', value: '220-240V / 50Hz' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    // Goûts de glace
    'glace-vanille': {
        title: 'Glace à la Vanille',
        price: '5,90 € / litre',
        image: 'images/Glaces/vanille.jpg',
        description: 'Notre glace à la vanille est préparée avec de la vraie gousse de vanille de Madagascar pour un goût authentique et onctueux.',
        specs: [
            { name: 'Allergènes', value: 'Lait, œufs, sucre' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Non' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'glace-chocolat': {
        title: 'Glace au Chocolat',
        price: '6,50 € / litre',
        image: 'images/Glaces/chocolat.jpg',
        description: 'Un délicieux chocolat noir à 70% pour les amateurs de chocolat intense et onctueux.',
        specs: [
            { name: 'Allergènes', value: 'Lait, œufs, sucre, soja' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Non' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    'glace-fraise': {
        title: 'Sorbet Fraise',
        price: '6,20 € / litre',
        image: 'images/Glaces/fraise.jpg',
        description: 'Un sorbet rafraîchissant à base de fraises françaises, parfait pour les journées ensoleillées.',
        specs: [
            { name: 'Allergènes', value: 'Fruits à coque' },
            { name: 'Végétarien', value: 'Oui' },
            { name: 'Végan', value: 'Oui' },
            { name: 'Sans gluten', value: 'Oui' }
        ]
    },
    // Pièces détachées
    'piece-cuve-melange': {
        title: 'Cuve de Mélange',
        price: '89,90 €',
        image: 'images/pieces granite/12g couvercle luminueux granité.png',
        description: 'Cuve de mélange en acier inoxydable pour machine à glaces italiennes. Conçue pour résister aux températures extrêmes et aux chocs thermiques, elle assure une préparation homogène de la glace.',
        specs: [
            { name: 'Matière', value: 'Acier inoxydable 18/10' },
            { name: 'Capacité', value: '5 litres' },
            { name: 'Diamètre', value: '30 cm' },
            { name: 'Hauteur', value: '25 cm' },
            { name: 'Garantie', value: '2 ans' }
        ]
    },
    'piece-manette-granite': {
        title: 'Manette pour Granité',
        price: '29,90 €',
        image: 'images/pieces granite/1g manette pour granité.png',
        description: 'Manette de commande complète pour machine à granité. Permet de contrôler facilement la distribution des boissons. Confortable à utiliser et résistante à l\'usure.',
        specs: [
            { name: 'Type', value: 'Manette complète' },
            { name: 'Compatible', value: 'Tous modèles granité' },
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Couleur', value: 'Blanc' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-cable-led': {
        title: 'Câble pour Capot LED',
        price: '19,90 €',
        image: 'images/pieces granite/15g cable pour capot led.png',
        description: 'Câble d\'alimentation pour le capot LED des machines à granité. Remplacement facile et rapide pour un éclairage optimal de votre machine.',
        specs: [
            { name: 'Longueur', value: '50 cm' },
            { name: 'Connecteur', value: 'Fiche DC 2.1mm' },
            { name: 'Tension', value: '12V' },
            { name: 'Couleur', value: 'Noir' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-palette': {
        title: 'Jeu de 4 palettes inox',
        price: '49,90 €',
        image: 'images/Pieces detachees/palette.jpg',
        description: 'Jeu de 4 palettes en inox 18/10 pour machine à glace italienne. Compatible avec la plupart des modèles du marché.',
        specs: [
            { name: 'Matière', value: 'Inox 18/10' },
            { name: 'Longueur', value: '35 cm' },
            { name: 'Largeur', value: '6 cm' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-bol': {
        title: 'Bol inox pour machine à glace',
        price: '129,90 €',
        image: 'images/Pieces detachees/bol.jpg',
        description: 'Bol en inox de qualité professionnelle pour machine à glace italienne. Parfait pour remplacer un bol endommagé ou en complément.',
        specs: [
            { name: 'Matière', value: 'Inox 18/10' },
            { name: 'Capacité', value: '4 litres' },
            { name: 'Diamètre', value: '28 cm' },
            { name: 'Garantie', value: '2 ans' }
        ]
    },
    // Pièces détachées - Suite
    'piece-1': {
        title: 'Manette pour Granité',
        price: '13,90 €',
        image: 'images/pieces granite/1g manette pour granité.png',
        description: 'Manette de commande pour machine à granité. Permet de contrôler facilement la préparation des boissons.',
        specs: [
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Couleur', value: 'Noir' },
            { name: 'Compatibilité', value: 'Tous modèles' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-2': {
        title: 'Piston à Granité',
        price: '6,80 €',
        image: 'images/pieces granite/2g piston a granité.png',
        description: 'Piston de qualité pour machine à granité. Pièce essentielle pour le brassage des boissons.',
        specs: [
            { name: 'Matière', value: 'Inox et plastique' },
            { name: 'Longueur', value: '25 cm' },
            { name: 'Diamètre', value: '5 cm' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-3': {
        title: 'Ressort de Piston',
        price: '3,90 €',
        image: 'images/pieces granite/3g ressort piston granité.png',
        description: 'Ressort de rappel pour piston de machine à granité. Assure un retour en position initiale fluide.',
        specs: [
            { name: 'Matière', value: 'Acier inoxydable' },
            { name: 'Longueur', value: '15 cm' },
            { name: 'Diamètre', value: '2 cm' },
            { name: 'Garantie', value: '3 mois' }
        ]
    },
    'piece-4': {
        title: 'Axe de Manette',
        price: '4,30 €',
        image: 'images/pieces granite/4g axe manette granité.png',
        description: 'Axe de fixation pour manette de machine à granité. Pièce de précision pour un fonctionnement optimal.',
        specs: [
            { name: 'Matière', value: 'Acier inoxydable' },
            { name: 'Longueur', value: '12 cm' },
            { name: 'Diamètre', value: '0.8 cm' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-5': {
        title: 'Joint de Piston',
        price: '1,80 €',
        image: 'images/pieces granite/5g joint piston granité.png',
        description: 'Joint d\'étanchéité pour piston de machine à granité. Évite les fuites de liquide.',
        specs: [
            { name: 'Matière', value: 'Caoutchouc alimentaire' },
            { name: 'Diamètre intérieur', value: '4.5 cm' },
            { name: 'Diamètre extérieur', value: '5.5 cm' },
            { name: 'Garantie', value: '3 mois' }
        ]
    },
    'piece-6': {
        title: 'Joint de Cuve',
        price: '4,10 €',
        image: 'images/pieces granite/6g joint cuve granité.png',
        description: 'Joint d\'étanchéité pour cuve de machine à granité. Assure une parfaite étanchéité de la cuve.',
        specs: [
            { name: 'Matière', value: 'Silicone alimentaire' },
            { name: 'Diamètre', value: '30 cm' },
            { name: 'Épaisseur', value: '0.4 cm' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-7': {
        title: 'Spirale Racloir',
        price: '39,90 €',
        image: 'images/pieces granite/7g spirale racleur granité.png',
        description: 'Spirale racleuse pour machine à granité. Facilite le détachement de la glace des parois.',
        specs: [
            { name: 'Matière', value: 'Inox 304' },
            { name: 'Longueur', value: '28 cm' },
            { name: 'Diamètre', value: '25 cm' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-8': {
        title: 'Cale de Bac Intérieur',
        price: '3,10 €',
        image: 'images/pieces granite/8g cale bac interieure.png',
        description: 'Cale de fixation pour bac intérieur de machine à granité. Maintient le bac en position pendant l\'utilisation.',
        specs: [
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Longueur', value: '10 cm' },
            { name: 'Largeur', value: '3 cm' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-9': {
        title: 'Bac 12 Litres',
        price: '64 €',
        image: 'images/pieces granite/9g bac 12 litres granité.png',
        description: 'Bac de préparation de 12 litres pour machine à granité. Grande capacité pour une production importante.',
        specs: [
            { name: 'Matière', value: 'Plastique alimentaire' },
            { name: 'Capacité', value: '12 litres' },
            { name: 'Couleur', value: 'Transparent' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-10': {
        title: 'Cache Piston',
        price: '? €',
        image: 'images/pieces granite/10g cache piston granité.png',
        description: 'Cache de protection pour le piston de la machine à granité. Protège le mécanisme des projections.',
        specs: [
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Couleur', value: 'Noir' },
            { name: 'Dimensions', value: '8 x 8 x 5 cm' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-11': {
        title: 'Rampe à Gouttes',
        price: '13,80 €',
        image: 'images/pieces granite/11g ramatte goute granité.png',
        description: 'Rampe de récupération des gouttes pour machine à granité. Garde votre plan de travail propre et sec.',
        specs: [
            { name: 'Matière', value: 'Inox 304' },
            { name: 'Longueur', value: '30 cm' },
            { name: 'Largeur', value: '8 cm' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-12': {
        title: 'Couvercle Lumineux',
        price: '? €',
        image: 'images/pieces granite/12g couvercle luminueux granité.png',
        description: 'Couvercle avec éclairage LED pour machine à granité. Améliore la visibilité et l\'esthétique de votre machine.',
        specs: [
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Couleur', value: 'Noir' },
            { name: 'Alimentation', value: '12V' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-13': {
        title: 'Joint de Spirale',
        price: '3,20 €',
        image: 'images/pieces granite/13g joint spirale pour granité.png',
        description: 'Joint d\'étanchéité pour la spirale de la machine à granité. Évite les fuites et assure un bon fonctionnement.',
        specs: [
            { name: 'Matière', value: 'Caoutchouc alimentaire' },
            { name: 'Diamètre', value: '3 cm' },
            { name: 'Épaisseur', value: '0.3 cm' },
            { name: 'Garantie', value: '3 mois' }
        ]
    },
    'piece-14': {
        title: 'Moteur de Granité',
        price: '113,80 €',
        image: 'images/pieces granite/14g moteur granité.png',
        description: 'Moteur de remplacement pour machine à granité. Pièce essentielle pour le brassage des boissons.',
        specs: [
            { name: 'Puissance', value: '120 W' },
            { name: 'Tension', value: '220-240V' },
            { name: 'Vitesse', value: '60 tr/min' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-15': {
        title: 'Câble pour Capot LED',
        price: '12,90 €',
        image: 'images/pieces granite/15g cable pour capot led.png',
        description: 'Câble d\'alimentation pour le capot LED de la machine à granité. Remplacez facilement un câble endommagé.',
        specs: [
            { name: 'Longueur', value: '50 cm' },
            { name: 'Connecteur', value: 'Fiche DC 2.1mm' },
            { name: 'Tension', value: '12V' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    
    // Pièces détachées pour machines à glaces italiennes
    'piece-ital-1': {
        title: 'Joint Piston Simple',
        price: '1,50 €',
        image: 'images/pieces italiennes/1 joint piston simple glace italienne.png',
        description: 'Joint d\'étanchéité pour machines à glaces italiennes à trois parfums. Garantit une parfaite étanchéité entre les différentes chambres de la machine.',
        specs: [
            { name: 'Type', value: 'Joint triple' },
            { name: 'Compatible', value: 'Machines 3 parfums' },
            { name: 'Matière', value: 'Caoutchouc alimentaire' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-2': {
        title: 'Joint Piston Double',
        price: '3,80 €',
        image: 'images/pieces italiennes/2 joint double piston glace italienne.png',
        description: 'Piston double pour machines à glaces italiennes à deux parfums. Permet une distribution précise et contrôlée de la glace.',
        specs: [
            { name: 'Type', value: 'Piston double' },
            { name: 'Compatible', value: 'Machines 2 parfums' },
            { name: 'Matière', value: 'Plastique alimentaire' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-3': {
        title: 'Piston Simple',
        price: '17,50 €',
        image: 'images/pieces italiennes/10 piston simple glace italienne.png',
        description: 'Piston simple pour machines à glaces italiennes à un parfum. Pièce maîtresse du système de distribution de la glace.',
        specs: [
            { name: 'Type', value: 'Piston simple' },
            { name: 'Compatible', value: 'Machines 1 parfum' },
            { name: 'Matière', value: 'Plastique alimentaire' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-4': {
        title: 'Piston Double',
        price: '17,90 €',
        image: 'images/pieces italiennes/11 piston double distributeur.png',
        description: 'Piston triple pour machines à glaces italiennes à trois parfums. Permet une distribution précise et contrôlée de la glace.',
        specs: [
            { name: 'Type', value: 'Piston triple' },
            { name: 'Compatible', value: 'Machines 3 parfums' },
            { name: 'Matière', value: 'Plastique alimentaire' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-5': {
        title: 'Distributeur',
        price: '96,80 €',
        image: 'images/pieces italiennes/12 distributeur glace italienne.png',
        description: 'Système de distribution complet pour machines à glaces italiennes. Permet de servir la glace de manière hygiénique et précise.',
        specs: [
            { name: 'Type', value: 'Distributeur' },
            { name: 'Compatible', value: 'Tous modèles' },
            { name: 'Matière', value: 'Acier inoxydable' },
            { name: 'Garantie', value: '2 ans' }
        ]
    },
    'piece-ital-6': {
        title: 'Manette Distributeur',
        price: '17,60 €',
        image: 'images/pieces italiennes/13 manette distributeur glace italienne.png',
        description: 'Manette de commande pour le distributeur de glace. Permet de contrôler facilement la distribution de la glace.',
        specs: [
            { name: 'Type', value: 'Manette' },
            { name: 'Compatible', value: 'Tous modèles' },
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-7': {
        title: 'Résistance Chauffante',
        price: '46 €',
        image: 'images/pieces italiennes/17 batteur 32 cm pour glace italienne.png',
        description: 'Résistance chauffante pour le maintien en température du mélange dans la machine à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Résistance' },
            { name: 'Puissance', value: '500W' },
            { name: 'Tension', value: '220-240V' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-ital-8': {
        title: 'Pompe à Vide',
        price: '49 €',
        image: 'images/pieces italiennes/18 batteur 38 cm pour glace italienne.png',
        description: 'Pompe à vide pour machines à glaces italiennes professionnelles. Crée le vide d\'air nécessaire à la fabrication d\'une glace onctueuse.',
        specs: [
            { name: 'Type', value: 'Pompe à vide' },
            { name: 'Débit', value: '1,5 m³/h' },
            { name: 'Tension', value: '220-240V' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-ital-9': {
        title: 'Moteur Ventilateur 45W',
        price: '46,50 €',
        image: 'images/pieces italiennes/20 moteur ventilateur 45 watts glace italienne.png',
        description: 'Ventilateur de refroidissement 45W pour machines à glaces italiennes. Assure un refroidissement optimal du moteur.',
        specs: [
            { name: 'Type', value: 'Ventilateur' },
            { name: 'Puissance', value: '45W' },
            { name: 'Tension', value: '220-240V' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-ital-10': {
        title: 'Moteur Ventilateur 70W',
        price: '49,50 €',
        image: 'images/pieces italiennes/21 moteur ventilateur 70 watts glace italienne.png',
        description: 'Ventilateur de refroidissement 70W haute performance pour machines à glaces italiennes professionnelles.',
        specs: [
            { name: 'Type', value: 'Ventilateur' },
            { name: 'Puissance', value: '70W' },
            { name: 'Tension', value: '220-240V' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-ital-11': {
        title: 'Moteur Principal',
        price: '210 €',
        image: 'images/pieces italiennes/24 gros moteur principal glace italienne.png',
        description: 'Moteur principal de remplacement pour machines à glaces italiennes. Cœur du système de fabrication de la glace.',
        specs: [
            { name: 'Type', value: 'Moteur' },
            { name: 'Puissance', value: '0,5 CV' },
            { name: 'Tension', value: '220-240V' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-ital-12': {
        title: 'Écran de Contrôle',
        price: '? €',
        image: 'images/pieces italiennes/29 carte mere panneaux de commande glace italienne.png',
        description: 'Panneau de commande électronique avec écran LCD pour machines à glaces italiennes. Permet de contrôler tous les paramètres de la machine.',
        specs: [
            { name: 'Type', value: 'Écran de contrôle' },
            { name: 'Affichage', value: 'LCD' },
            { name: 'Tension', value: '12V DC' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-13': {
        title: 'Pompe de Circulation',
        price: '? €',
        image: 'images/pieces granite/10g cache piston granité.png',
        description: 'Pompe de circulation pour le mélange dans les machines à glaces italiennes. Assure une répartition homogène du froid.',
        specs: [
            { name: 'Type', value: 'Pompe' },
            { name: 'Débit', value: '20 L/min' },
            { name: 'Tension', value: '220-240V' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-ital-14': {
        title: 'Joint de Distributeur',
        price: '3,60 €',
        image: 'images/pieces italiennes/3 gros joint distributeur glace italienne.png',
        description: 'Joint d\'étanchéité pour le distributeur des machines à glaces italiennes. Assure une parfaite étanchéité.',
        specs: [
            { name: 'Type', value: 'Joint' },
            { name: 'Diamètre', value: '8 cm' },
            { name: 'Matière', value: 'Caoutchouc alimentaire' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-15': {
        title: 'Vis de Distributeur (Petite)',
        price: '5,60 €',
        image: 'images/pieces italiennes/4 petite vis distributeur glace italienne.png',
        description: 'Petite vis de fixation pour le distributeur des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Vis' },
            { name: 'Longueur', value: '2 cm' },
            { name: 'Matière', value: 'Acier inoxydable' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-16': {
        title: 'Vis de Distributeur (Grande)',
        price: '5,80 €',
        image: 'images/pieces italiennes/5 grande vis distributeur glace italienne.png',
        description: 'Grande vis de fixation pour le distributeur des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Vis' },
            { name: 'Longueur', value: '3,5 cm' },
            { name: 'Matière', value: 'Acier inoxydable' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-17': {
        title: 'Pochette de Joints Complets',
        price: '24,90 €',
        image: 'images/pieces italiennes/6 pochette de joint compléte glace italienne.png',
        description: 'Ensemble complet de joints pour l\'entretien complet de votre machine à glace italienne.',
        specs: [
            { name: 'Type', value: 'Kit de joints' },
            { name: 'Pièces incluses', value: '10 pièces' },
            { name: 'Matière', value: 'Caoutchouc alimentaire' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-18': {
        title: 'Capsule à Visser',
        price: '2,90 €',
        image: 'images/pieces italiennes/7 capsule a visser pour glace italienne.png',
        description: 'Capsule de protection pour les raccords des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Capsule' },
            { name: 'Diamètre', value: '4 cm' },
            { name: 'Matière', value: 'Plastique alimentaire' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-19': {
        title: 'Bouton de Dureté 3 Fils',
        price: '19,90 €',
        image: 'images/pieces italiennes/8 bouton de dureté glace italienne 3 fils.png',
        description: 'Bouton de réglage de la dureté avec connexion 3 fils pour machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Bouton' },
            { name: 'Connexion', value: '3 fils' },
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-20': {
        title: 'Bouton de Dureté 2 Fils',
        price: '19,90 €',
        image: 'images/pieces italiennes/9 bouton de dureté glace italienne 2 fils.png',
        description: 'Bouton de réglage de la dureté avec connexion 2 fils pour machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Bouton' },
            { name: 'Connexion', value: '2 fils' },
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-21': {
        title: 'Axe pour Manette',
        price: '9,80 €',
        image: 'images/pieces italiennes/14 axe pour manette glace italienne.png',
        description: 'Axe de fixation pour la manette de distribution des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Axe' },
            { name: 'Longueur', value: '6 cm' },
            { name: 'Matière', value: 'Acier inoxydable' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-22': {
        title: 'Tuyaux de Foisonnement',
        price: '10,60 €',
        image: 'images/pieces italiennes/15 tuyaux de foisonement bacs glace italienne.png',
        description: 'Kit de tuyaux pour le circuit de foisonnement des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Tuyaux' },
            { name: 'Longueur', value: '50 cm' },
            { name: 'Matière', value: 'Silicone alimentaire' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-ital-23': {
        title: 'Ramasse-Gouttes',
        price: '? €',
        image: 'images/pieces italiennes/16ramasse goutte pour glace italienne.png',
        description: 'Récupérateur de gouttes pour machines à glaces italiennes. Garde votre espace de travail propre.',
        specs: [
            { name: 'Type', value: 'Ramasse-gouttes' },
            { name: 'Dimensions', value: '30x15 cm' },
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-24': {
        title: 'Batteur 32 cm',
        price: '46 €',
        image: 'images/pieces italiennes/17 batteur 32 cm pour glace italienne.png',
        description: 'Batteur de 32 cm de diamètre pour machines à glaces italiennes. Idéal pour les petits modèles.',
        specs: [
            { name: 'Type', value: 'Batteur' },
            { name: 'Diamètre', value: '32 cm' },
            { name: 'Matière', value: 'Acier inoxydable' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-25': {
        title: 'Batteur 38 cm',
        price: '49 €',
        image: 'images/pieces italiennes/18 batteur 38 cm pour glace italienne.png',
        description: 'Batteur de 38 cm de diamètre pour machines à glaces italiennes. Pour les modèles standards.',
        specs: [
            { name: 'Type', value: 'Batteur' },
            { name: 'Diamètre', value: '38 cm' },
            { name: 'Matière', value: 'Acier inoxydable' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-26': {
        title: 'Couvercle de Bac',
        price: '13,80 €',
        image: 'images/pieces italiennes/19 couvercle bac a glace italienne.png',
        description: 'Couvercle de protection pour les bacs de conservation des glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Couvercle' },
            { name: 'Dimensions', value: '40x30 cm' },
            { name: 'Matière', value: 'Plastique alimentaire' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-27': {
        title: 'Transformateur 12V',
        price: '46,90 €',
        image: 'images/pieces italiennes/22 petit transformateur glace italienne.png',
        description: 'Transformateur 12V pour l\'alimentation des circuits de commande des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Transformateur' },
            { name: 'Entrée', value: '220-240V' },
            { name: 'Sortie', value: '12V 2A' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-28': {
        title: 'Transformateur 24V',
        price: '49,90 €',
        image: 'images/pieces italiennes/23 gros transformateur glace italienne.png',
        description: 'Transformateur 24V pour l\'alimentation des moteurs et compresseurs des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Transformateur' },
            { name: 'Entrée', value: '220-240V' },
            { name: 'Sortie', value: '24V 5A' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-29': {
        title: 'Couvercle de Machine',
        price: '64 €',
        image: 'images/pieces italiennes/25 grand couvercle de machine a glace italienne.png',
        description: 'Grand couvercle de protection pour machines à glaces italiennes professionnelles.',
        specs: [
            { name: 'Type', value: 'Couvercle' },
            { name: 'Dimensions', value: '60x40 cm' },
            { name: 'Matière', value: 'Plastique ABS renforcé' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-30': {
        title: 'Bouton Réfrigérateur',
        price: '7,80 €',
        image: 'images/pieces italiennes/26 bouton frigo glace italienne.png',
        description: 'Bouton de commande pour le système de réfrigération des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Bouton' },
            { name: 'Couleur', value: 'Noir' },
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Garantie', value: '1 an' }
        ]
    },
    'piece-ital-31': {
        title: 'Jeu de Courroies',
        price: '? €',
        image: 'images/pieces italiennes/27 courroies glaces italienne.png',
        description: 'Jeu de courroies de rechange pour la transmission des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Courroies' },
            { name: 'Nombre', value: '3 pièces' },
            { name: 'Matière', value: 'Caoutchouc renforcé' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-ital-32': {
        title: 'Ventilateur Réfrigérateur',
        price: '29,80 €',
        image: 'images/pieces italiennes/30 ventilateur frigo glace italienne.png',
        description: 'Ventilateur pour le système de refroidissement des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Ventilateur' },
            { name: 'Tension', value: '220-240V' },
            { name: 'Puissance', value: '15W' },
            { name: 'Garantie', value: '6 mois' }
        ]
    },
    'piece-ital-33': {
        title: 'Cache Distributeur',
        price: '? €',
        image: 'images/pieces italiennes/32 cache distributeur glace italienne.png',
        description: 'Cache de protection pour le distributeur des machines à glaces italiennes.',
        specs: [
            { name: 'Type', value: 'Cache' },
            { name: 'Dimensions', value: '15x10 cm' },
            { name: 'Matière', value: 'Plastique ABS' },
            { name: 'Garantie', value: '1 an' }
        ]
    }
};

// Initialisation des modales
document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la modale
    const modal = document.getElementById('productModal');
    if (!modal) return;
    
    const closeButton = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalProductTitle');
    const modalPrice = document.getElementById('modalProductPrice');
    const modalImage = document.getElementById('modalProductImage');
    const modalSpecs = document.getElementById('modalProductSpecs');
    const modalDescription = document.getElementById('modalProductDescription');
    const modalAddToCart = document.getElementById('modalAddToCart');
    const modalContactUs = document.getElementById('modalContactUs');

    // Fonction pour ouvrir la modale avec les données du produit
    function openProductModal(productId) {
        const product = productsData[productId];
        if (!product) return;

        modalTitle.textContent = product.title;
        modalPrice.textContent = product.price;
        modalImage.src = product.image;
        modalImage.alt = product.title;
        modalDescription.textContent = product.description;

        // Mise à jour des spécifications
        if (product.specs && product.specs.length > 0) {
            modalSpecs.innerHTML = product.specs.map(spec => `
                <div class="spec-item">
                    <strong>${spec.name}</strong>
                    <span>${spec.value}</span>
                </div>
            `).join('');
            modalSpecs.style.display = 'grid';
        } else {
            modalSpecs.style.display = 'none';
        }

        // Mise à jour du lien "Ajouter au panier"
        if (modalAddToCart) {
            modalAddToCart.href = `#${productId}`;
            modalAddToCart.onclick = (e) => {
                e.preventDefault();
                alert(`Produit ajouté au panier : ${product.title}`);
                // Ici, vous pourriez ajouter le code pour ajouter le produit au panier
            };
        }

        // Mise à jour du lien "Nous contacter"
        if (modalContactUs) {
            modalContactUs.href = `contact.html?produit=${encodeURIComponent(product.title)}`;
        }

        // Afficher la modale
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Fermer la modale
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Événements
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Configurer les boutons "En savoir plus"
    document.querySelectorAll('.btn:not(.btn-cart)').forEach(button => {
        if (button.textContent.trim() === 'En savoir plus') {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const card = button.closest('.menu-item');
                if (card) {
                    const productId = card.dataset.productId;
                    if (productId) {
                        openProductModal(productId);
                    }
                }
            });
        }
    });
});
