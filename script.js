class Employe {
    constructor (matricule, name, prenom, dateNaissance, dateEmbauche, salaire) {
        this.matricule = matricule
        this.name = name
        this.prenom = prenom
        this.dateNaissance = dateNaissance
        this.dateEmbauche = dateEmbauche
        this.salaire = salaire
    }

    get age () {
        let dateNaissance = new Date(this.dateNaissance)
        let dateActuelle = Date.now()
        //difference des heures
        let timeDiff = dateActuelle - dateNaissance.getTime()
        //différence de jours
        let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365)
        //afficher la différence
        return age
    }

    get anciennete () {
        let dateEmbauche = new Date(this.dateEmbauche)
        let dateActuelle = Date.now()
        //difference des heures
        let timeDiff = dateActuelle - dateEmbauche.getTime()
        // différence de jours
        let anciennete = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365)
        //afficher la différence
        return anciennete
    }

    augmenterSalaireByAnciennete() {
        if (this.anciennete < 5) {
            return this.salaire * 1.02
        } else if (this.anciennete < 10) {
            return this.salaire * 1.05
        } else {
            return this.salaire * 1.10
        }
    } 

    afficherEmploye () {
        return `
Matricule : ${this.matricule}
Name : ${this.name.toUpperCase()} ${this.prenom[0].toUpperCase()}${this.prenom.slice(1).toLowerCase()}
Age : ${this.age} ans
Ancienneté : ${this.anciennete}
Salaire : ${this.augmenterSalaireByAnciennete()}€`
    }
}
const Sylvie = new Employe (1, 'Lu', 'sylvie', '05/04/1991', '03/09/2018', 2200)
    console.log(Sylvie.age)
    console.log(Sylvie.anciennete)
    console.log(Sylvie.augmenterSalaireByAnciennete())
    console.log(Sylvie.afficherEmploye())
