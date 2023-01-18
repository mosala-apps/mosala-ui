/* eslint-disable no-useless-escape */

export default {
    data() {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 5,
        maxFiles: 1,
        addRemoveLinks: true,
        acceptedFiles: '.jpg, .png, .gif',
        parallelUploads: 1,
        dictCancelUpload: 'Annuler',
        dictRemoveFile: 'Supprimer',
        dictRemoveFileConfirmation: 'Etes-vous sûr de supprimer cette image ?',
        dictCancelUploadConfirmation: "Etes-vous sûr d'annuler cette image ?",
      },
      validate: {
        required: (v) => !!v || "Ce champ est réquis",
        email: (value) =>
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,8})$/.test(
            value
          ) || "Cet email n'est pas valide",
        requiredCheckMultiple: (value) =>
          /^(?!\s*$).+$/.test(value) || "Ce champ est obligatoire",
        string: (value) =>
          /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\| A-Za-z0-9]+/g.test(
            value
          ) || "Ce champ doit être une chaîne de caractère",
        number: (value) =>
          /^([0-9])$/.test(value) || "Ce champ doit être un entier",
        numbers: (value) =>
          /(?<!-)\b([1-9]?\d{1,200})\b/.test(value) || "Ce champ doit être un nombre",
        password: (value) =>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)||"Le mot de passe doit contenir \n au minimum 8 caractères,\n au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
        matchingPasswords:(value, value2)=> value.match(value2) ?true:'Les mots de passe ne sont pas identiques',
        picture: (value) =>
          !value ||
          value.size < 2000000 ||
          "La taille de l'image doit être moins de 2 MB!",
      },
    };
  
}
}

