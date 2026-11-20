
const DAYS = [{"day": 1, "title": "Le rébus à huit pattes", "kind": "Rébus", "prompt": "Déchiffre le rébus : « ARAIGNÉE ». Maintenant, réponds à la question : combien de pattes possède une araignée adulte ?", "hint": "Compte ses pattes, pas ses yeux !", "how": "Écris le nombre de pattes d'une araignée.", "hash": "2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"}, {"day": 2, "title": "La balle fugitive", "kind": "Défi réel", "prompt": "Quelqu’un a caché une petite balle sous l’un des trois verres. Demande à la personne qui a préparé ton calendrier de mélanger les verres, puis retrouve celui qui cache la balle. Sous le bon verre, un papier t’attend avec le nombre du jour.", "hint": "Astuce : utilise des verres assez grands et mélange lentement au début.", "how": "Le papier caché sous le bon verre porte le nombre à saisir.", "hash": "eb1e33e8a81b697b75855af6bfcdbcbf7cbbde9f94962ceaec1ed8af21f5a50f"}, {"day": 3, "title": "Le sapin bien garni", "kind": "Observation", "prompt": "Sur la carte du sapin préparée pour toi, observe les cinq rangées d’étoiles. Compte-les soigneusement, rangée par rangée.", "hint": "Compte une rangée à la fois pour ne rien oublier.", "how": "Combien y a-t-il d'étoiles en tout ?", "hash": "9f14025af0065b30e47e23ebb3b491d39ae8ed17d33739e5ff3827ffb3634953"}, {"day": 4, "title": "Les cadeaux du lutin", "kind": "Calcul malin", "prompt": "Un lutin prépare 6 sacs. Dans chaque sac, il glisse 7 petits cadeaux. Combien de cadeaux a-t-il préparés en tout ?", "hint": "Une multiplication suffit : 6 groupes de 7.", "how": "Multiplie le nombre de sacs par les cadeaux dans chaque sac.", "hash": "73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049"}, {"day": 5, "title": "La journée de Noël", "kind": "Énigme", "prompt": "Une journée complète commence à minuit et se termine au minuit suivant. Combien d'heures contient-elle ?", "hint": "Pense à une journée entière, pas seulement aux heures où l'on est réveillé.", "how": "Donne le nombre d'heures dans une journée.", "hash": "c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"}, {"day": 6, "title": "Le code de l'alphabet", "kind": "Code secret", "prompt": "Le Père Noël a remplacé deux lettres par leur rang dans l'alphabet : D = 4 et H = 8. Colle les deux chiffres dans cet ordre pour ouvrir le cadenas : D puis H.", "hint": "A vaut 1, B vaut 2, C vaut 3…", "how": "Transforme D et H en chiffres, puis colle-les.", "hash": "98010bd9270f9b100b6214a21754fd33bdc8d41b2bc9f9dd16ff54d3c34ffd71"}, {"day": 7, "title": "Les douzaines du traîneau", "kind": "Calcul malin", "prompt": "Le traîneau transporte 3 douzaines de grelots. Trois grelots se décrochent en route. Combien en reste-t-il ?", "hint": "Une douzaine contient 12 objets.", "how": "Calcule 3 × 12, puis enlève 3.", "hash": "c6f3ac57944a531490cd39902d0f777715fd005efac9a30622d5f5205e7f6894"}, {"day": 8, "title": "La guirlande lumineuse", "kind": "Suite logique", "prompt": "Une guirlande est composée de 3 segments identiques. Chaque segment porte 13 ampoules. Combien d'ampoules brillent au total ?", "hint": "Additionne 13 trois fois, ou multiplie.", "how": "3 segments de 13 ampoules.", "hash": "0b918943df0962bc7a1824c0555a389347b4febdc7cf9d1254406d80ce44e3f9"}, {"day": 9, "title": "La lettre mystérieuse", "kind": "Alphabet", "prompt": "Le lutin a laissé une seule lettre : S. Il affirme que son rang dans l'alphabet est le nombre du jour. Quel est le rang de la lettre S ?", "hint": "A est la 1re lettre, B la 2e…", "how": "Compte jusqu'à S dans l'alphabet.", "hash": "9400f1b21cb527d7fa3d3eabba93557a18ebe7a2ca4e471cfe5e4c5b4ca7f767"}, {"day": 10, "title": "Le labyrinthe des rennes", "kind": "Parcours", "prompt": "Le renne a réussi à sortir du labyrinthe dessiné sur ta carte. À la sortie, il trouve 9 sacs contenant chacun 5 carottes. Combien de carottes a-t-il trouvées ?", "hint": "Le labyrinthe est le chemin ; le calcul est la clé.", "how": "Multiplie 9 sacs par 5 carottes.", "hash": "811786ad1ae74adfdd20dd0372abaaebc6246e343aebd01da0bfc4c02bf0106c"}, {"day": 11, "title": "La mémoire des lutins", "kind": "Mémoire", "prompt": "Retourne les 12 cartes face cachée et retrouve les 6 paires. Pour chaque paire retrouvée, tu gagnes 6 points. Combien de points remportes-tu si tu retrouves les 6 paires ?", "hint": "Chaque paire retrouvée rapporte 6 points.", "how": "Multiplie les 6 paires par les 6 points attribués à chacune.", "hash": "76a50887d8f1c2e9301755428990ad81479ee21c25b43215cf524541e0503269"}, {"day": 12, "title": "Le bonhomme de neige", "kind": "Devinette", "prompt": "Un bonhomme de neige a 3 boutons sur chacun de ses 3 étages : haut, milieu et bas. Combien de boutons faudrait-il pour 3 bonshommes identiques ?", "hint": "Commence par compter les boutons d'un bonhomme.", "how": "3 bonshommes, 3 étages, 3 boutons par étage.", "hash": "670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf"}, {"day": 13, "title": "Les flocons dans la fenêtre", "kind": "Comptage", "prompt": "Dessine 4 fenêtres. Dans chacune, dessine 13 flocons. Elle doit compter le total des flocons visibles.", "hint": "Chaque fenêtre contient exactement 13 flocons.", "how": "Multiplie 4 fenêtres par 13 flocons.", "hash": "41cfc0d1f2d127b04555b7246d84019b4d27710a3f3aff6e7764375b1e06e05d"}, {"day": 14, "title": "La case manquante du renne", "kind": "Logique", "prompt": "Voici une opération à compléter : 11 + ? = 33. Quel nombre doit remplacer le point d’interrogation ?", "hint": "Soustrais 11 à 33 pour trouver le nombre manquant.", "how": "Le nombre manquant est 33 moins 11.", "hash": "785f3ec7eb32f30b90cd0fcf3657d388b5ff4297f2f9716ff66e9b69c05ddd09"}, {"day": 15, "title": "Le nombre premier", "kind": "Énigme mathématique", "prompt": "Trouve le 13e nombre premier. Les premiers nombres premiers sont 2, 3, 5, 7, 11…", "hint": "Un nombre premier n'a que deux diviseurs : 1 et lui-même. Énumère-les dans l'ordre.", "how": "Compte jusqu'au 13e nombre premier.", "hash": "3d914f9348c9cc0ff8a79716700b9fcd4d2f3e711608004eb8f138bcba7f14d9"}, {"day": 16, "title": "La balance du Père Noël", "kind": "Pesée / calcul", "prompt": "Sur la balance du Père Noël, 7 petits sacs pèsent chacun 7 kg. Quel est le poids total des 7 sacs ?", "hint": "Multiplie 7 sacs par 7 kg chacun.", "how": "7 sacs de 7 kg chacun.", "hash": "624b60c58c9d8bfb6ff1886c2fd605d2adeb6ea4da576068201b6c6958ce93f4"}, {"day": 17, "title": "Le carré magique", "kind": "Observation / calcul", "prompt": "Un carré a 7 cases sur chaque côté. Pour ce défi, imagine un carré de 7 lignes et 7 colonnes : combien de petites cases contient-il ?", "hint": "Le nombre de lignes est égal au nombre de colonnes.", "how": "Calcule 7 × 7.", "hash": "0e17daca5f3e175f448bacace3bc0da47d0655a74c8dd0dc497a3afbdad95f1f"}, {"day": 18, "title": "La part du gâteau", "kind": "Énigme", "prompt": "Un gâteau est partagé équitablement entre 4 personnes. Il y avait 100 petites décorations dessus. Combien de décorations chaque personne reçoit-elle si elles sont réparties également ?", "hint": "Partage 100 en 4 parts égales.", "how": "Divise 100 par 4.", "hash": "b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"}, {"day": 19, "title": "Le code du coffre", "kind": "Code secret", "prompt": "Le coffre s'ouvre avec le résultat de cette opération : 6 × 7 + 1. Attention à respecter les priorités de calcul.", "hint": "Fais la multiplication avant l'addition.", "how": "Calcule 6 × 7, puis ajoute 1.", "hash": "44cb730c420480a0477b505ae68af508fb90f96cf0ec54c6ad16949dd427f13a"}, {"day": 20, "title": "Les bougies de l'Avent", "kind": "Calcul malin", "prompt": "Deux rangées de bougies comptent chacune 17 bougies. Combien y a-t-il de bougies en tout ?", "hint": "Deux fois 17.", "how": "Additionne 17 et 17.", "hash": "86e50149658661312a9e0b35558d84f6c6d3da797f552a9657fe0558ca40cdef"}, {"day": 21, "title": "Les rennes en équipe", "kind": "Devinette", "prompt": "Il y a 3 équipes de rennes. Chaque équipe compte 6 rennes. Combien de rennes participent à l'entraînement ?", "hint": "Imagine 3 groupes de 6.", "how": "Multiplie 3 par 6.", "hash": "4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"}, {"day": 22, "title": "Le double secret", "kind": "Calcul malin", "prompt": "Le lutin a trouvé 23 noix. Son ami en trouve exactement autant. Combien de noix ont-ils ensemble ?", "hint": "Deux quantités identiques : il faut doubler 23.", "how": "Calcule 23 + 23.", "hash": "25fc0e7096fc653718202dc30b0c580b8ab87eac11a700cba03a7c021bc35b0c"}, {"day": 23, "title": "Les chaussettes du salon", "kind": "Observation / calcul", "prompt": "Il y a 19 paires de chaussettes suspendues près de la cheminée. Combien de chaussettes cela représente-t-il ?", "hint": "Une paire contient deux chaussettes.", "how": "Multiplie 19 par 2.", "hash": "aea92132c4cbeb263e6ac2bf6c183b5d81737f179f21efdc5863739672f0f470"}, {"day": 24, "title": "La dernière enveloppe", "kind": "Finale", "prompt": "Dernière mission ! Sur une carte, le Père Noël a écrit : « Je suis le nombre qui vient juste après 50. » Saisis ce nombre pour ouvrir le message final.", "hint": "C'est le tout dernier nombre à noter avant de faire ton addition.", "how": "Quel nombre vient juste après 50 ?", "hash": "031b4af5197ec30a926f48cf40e11a7dbc470048a21e4003b7a3c07c5dab1baa"}];
const START = new Date(2026, 11, 1, 0, 0, 0);
const END = new Date(2026, 11, 24, 23, 59, 59);
const params = new URLSearchParams(location.search);
const preview = params.get("preview") === "1";
const grid = document.querySelector("#calendar");
const modal = document.querySelector("#dayModal");
const closeModal = document.querySelector("#closeModal");
const dayTitle = document.querySelector("#dayTitle");
const dayKind = document.querySelector("#dayKind");
const dayPrompt = document.querySelector("#dayPrompt");
const dayHint = document.querySelector("#dayHint");
const hintButton = document.querySelector("#hintButton");
const answerForm = document.querySelector("#answerForm");
const answerInput = document.querySelector("#answerInput");
const feedback = document.querySelector("#feedback");
const solvedPanel = document.querySelector("#solvedPanel");
const activeDayLabel = document.querySelector("#activeDayLabel");
const progressLabel = document.querySelector("#progressLabel");
const snow = document.querySelector("#snow");
let currentDay = null;
let hintShown = false;

function todayLocal() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
function isUnlocked(day) {
  if (preview) return true;
  const now = todayLocal();
  const unlock = new Date(2026, 11, day, 0, 0, 0);
  return now >= unlock;
}
function isPastOrToday(day) {
  if (preview) return true;
  const now = todayLocal();
  return now >= new Date(2026, 11, day, 0, 0, 0);
}
function isSolved(day) {
  return localStorage.getItem("operation836-day-" + day) !== null;
}
function renderCalendar() {
  grid.innerHTML = "";
  DAYS.forEach(item => {
    const unlocked = isUnlocked(item.day);
    const solved = isSolved(item.day);
    const button = document.createElement("button");
    button.className = "door" + (unlocked ? " unlocked" : " locked") + (solved ? " solved" : "");
    button.type = "button";
    button.disabled = !unlocked;
    button.setAttribute("aria-label", unlocked ? `Ouvrir le jour ${item.day}` : `Jour ${item.day} verrouillé`);
    button.innerHTML = `<span class="door-top">${String(item.day).padStart(2,"0")}</span><span class="door-icon">${solved ? "✓" : unlocked ? "✦" : "🔒"}</span><span class="door-bottom">${solved ? "trouvé" : unlocked ? "ouvrir" : "bientôt"}</span>`;
    if (unlocked) button.addEventListener("click", () => openDay(item.day));
    grid.appendChild(button);
  });
  const count = DAYS.filter(d => isSolved(d.day)).length;
  progressLabel.textContent = `${count} / 24 épreuves validées`;
}
function openDay(day) {
  currentDay = DAYS[day-1];
  hintShown = false;
  dayTitle.textContent = currentDay.title;
  dayKind.textContent = currentDay.kind;
  dayPrompt.textContent = currentDay.prompt;
  dayHint.textContent = currentDay.hint;
  dayHint.hidden = true;
  hintButton.textContent = "Un petit indice ?";
  feedback.textContent = "";
  feedback.className = "feedback";
  activeDayLabel.textContent = `ÉPREUVE ${String(day).padStart(2,"0")} / 24`;
  answerInput.value = "";
  answerForm.hidden = isSolved(day);
  solvedPanel.hidden = !isSolved(day);
  const saved = localStorage.getItem("operation836-day-" + day);
  document.querySelector("#revealedNumber").textContent = saved || "—";
  modal.showModal();
}
async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2,"0")).join("");
}
hintButton.addEventListener("click", () => {
  if (!currentDay) return;
  dayHint.hidden = false;
  hintButton.textContent = "Indice dévoilé";
});
answerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const value = answerInput.value.trim().replace(/\s/g, "");
  if (!/^\d{1,3}$/.test(value)) {
    feedback.textContent = "Entre simplement un nombre.";
    feedback.className = "feedback error";
    return;
  }
  const digest = await sha256(value);
  if (digest === currentDay.hash) {
    localStorage.setItem("operation836-day-" + currentDay.day, value);
    document.querySelector("#revealedNumber").textContent = value;
    answerForm.hidden = true;
    solvedPanel.hidden = false;
    feedback.textContent = "";
    renderCalendar();
  } else {
    feedback.textContent = "Ce n'est pas encore le bon nombre… Regarde bien l'énigme et réessaie !";
    feedback.className = "feedback error";
    answerInput.select();
  }
});
closeModal.addEventListener("click", () => modal.close());
modal.addEventListener("click", e => {
  if (e.target === modal) modal.close();
});
document.querySelector("#writeReminder").addEventListener("click", () => {
  document.querySelector("#reminderToast").hidden = false;
  setTimeout(() => document.querySelector("#reminderToast").hidden = true, 3200);
});
if (preview) {
  document.querySelector("#previewNotice").hidden = false;
}
renderCalendar();
