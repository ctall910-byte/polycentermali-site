// ALBUM SOUVENIR : ajoutez simplement une ligne par photo, affiche ou vidéo.
//  - photo   : fichier dans public/album/photos/   puis { type: 'photo', titre: '...', src: '/album/photos/fichier.jpg', date: 'Mars 2026' }
//  - terrain : fichier dans public/album/terrain/  puis { type: 'terrain', titre: '...', src: '/album/terrain/fichier.jpg' }
//  - affiche : fichier dans public/album/affiches/ puis { type: 'affiche', titre: '...', src: '/album/affiches/fichier.jpg' }
//  - vidéo   : fichier dans public/album/videos/   puis { type: 'video', titre: '...', src: '/album/videos/session1.mp4' }
//              ou YouTube : { type: 'video', titre: '...', youtube: 'IDENTIFIANT_DE_LA_VIDEO' }
export const album = [
  { type: 'photo', titre: 'Formation en groupe : fin de session', src: '/formations/pf1.jpg' },
  { type: 'photo', titre: 'Habilitation électrique HT/BT', src: '/formations/pf2.jpg' },
  { type: 'photo', titre: 'Habilitation électrique : Module 2, risques électriques', src: '/album/photos/habilitation-module2.jpg' },
  { type: 'photo', titre: 'Atelier d’installation électrique', src: '/formations/pf3.jpg' },
  { type: 'photo', titre: 'Séance de formation solaire', src: '/formations/pf4.jpg' },
  { type: 'photo', titre: 'Pratique solaire : branchement de batteries', src: '/formations/pf5.jpg' },
  { type: 'photo', titre: 'Travaux pratiques de câblage', src: '/formations/pf6.jpg' },
  { type: 'photo', titre: 'Formation énergie solaire', src: '/formations/pf7.jpg' },
  { type: 'photo', titre: 'Formation solaire : présentation d’un onduleur hybride', src: '/album/photos/solaire-onduleur-1.jpg' },
  { type: 'photo', titre: 'Formation solaire : démonstration autour de l’onduleur', src: '/album/photos/solaire-onduleur-2.jpg' },
  { type: 'photo', titre: 'Photo de groupe avec les participants', src: '/album/photos/groupe-participants.jpg' },
  { type: 'photo', titre: 'Remise de rapports de fin de cycle', src: '/album/photos/rapports-fin-cycle.jpg' },
  { type: 'photo', titre: 'Formation en sécurité : principes généraux de prévention', src: '/album/photos/formation-prevention.jpg' },

  { type: 'terrain', titre: 'Travaux en hauteur sur un poste électrique', src: '/album/terrain/poste-electrique.jpg' },
  { type: 'terrain', titre: 'Sur site, en tenue de sécurité', src: '/album/terrain/site-securite.jpg' },
  { type: 'terrain', titre: 'Automate programmable Siemens SIMATIC S7-400', src: '/album/terrain/automate-siemens.jpg' },
  { type: 'terrain', titre: 'Bureau de chantier : équipe sur site', src: '/album/terrain/bureau-chantier.jpg' },
  { type: 'terrain', titre: 'Machine de menuiserie en atelier', src: '/album/terrain/menuiserie.jpg' },
  { type: 'terrain', titre: 'Machine de finition en atelier de cordonnerie', src: '/album/terrain/cordonnerie.jpg' },
  { type: 'terrain', titre: 'Machine d’atelier artisanal', src: '/album/terrain/machine-atelier.jpg' },
  { type: 'terrain', titre: 'Machine industrielle et sa prise triphasée', src: '/album/terrain/machine-triphase.jpg' },
  { type: 'terrain', titre: 'Automate Siemens SIMATIC ET 200M', src: '/album/terrain/siemens-et200m.jpg' },

  { type: 'affiche', titre: 'Poly-Center Academy : 6 week-ends pour transformer sa vie', src: '/album/affiches/poly-center-academy.jpg' },
  { type: 'affiche', titre: 'Formation en sécurité industrielle', src: '/album/affiches/securite-industrielle.jpg' },
  { type: 'affiche', titre: 'Sécurité industrielle : 2ème vague', date: 'Sept. 2026', src: '/album/affiches/securite-industrielle-2eme-vague.jpg' },
  { type: 'affiche', titre: 'Dimensionnement photovoltaïque et hybrides (PVsyst / HOMER)', date: 'Sept. 2026', src: '/album/affiches/photovoltaique-hybride.jpg' },
  { type: 'affiche', titre: 'Environnement et développement durable', src: '/album/affiches/environnement.jpg' },
  { type: 'affiche', titre: 'Certificats par validation des acquis de l’expérience (VAE)', src: '/album/affiches/vae.jpg' },
  { type: 'affiche', titre: 'Initiation à l’éclairage bâtiment', date: 'Mars 2026', src: '/album/affiches/initiation-eclairage.jpg' },
  { type: 'affiche', titre: 'Électricité bâtiment : formation 100 % pratique', date: 'Avril 2026', src: '/album/affiches/electricite-batiment.jpg' },
  { type: 'affiche', titre: 'Installation des systèmes solaires', date: 'Avril 2026', src: '/album/affiches/installation-solaire.jpg' },
  { type: 'affiche', titre: 'Académie du développement durable : Module 5, énergies renouvelables', date: 'Juillet 2026', src: '/album/affiches/academie-module5.jpg' },
  { type: 'affiche', titre: 'Académie du développement durable : Module 7, gestion des projets environnementaux', date: 'Juillet 2026', src: '/album/affiches/academie-module7.jpg' },
  { type: 'affiche', titre: 'Académie du développement durable : session finale (modules 8 et 9)', date: 'Août 2026', src: '/album/affiches/academie-session-finale.jpg' },
  { type: 'affiche', titre: 'La finance pour non-financiers', date: 'Août 2026', src: '/album/affiches/finance-non-financiers.jpg' },
  { type: 'affiche', titre: 'Étude d’impact environnemental et social (EIES)', date: 'Août 2026', src: '/album/affiches/eies.jpg' },
  { type: 'video', titre: 'Habilitation électrique HT/BT : extrait de la session', src: '/album/videos/habilitation-electrique.mp4', poster: '/album/videos/habilitation-electrique.jpg' },
];
