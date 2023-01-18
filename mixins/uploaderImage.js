export default {
  data() {
    return {
      uploadFile: {
        uploadFieldName: 'file',
        maxSize: 1024,
        isError: false,
        formData: null,
      },
    }
  },
  methods: {
    onFileChange(e) {
      this.isLoading = true
      const imageFile = e
      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(imageFile)

      fileReader.onloadend = (event) => {
        const size =
          imageFile.size / this.uploadFile.maxSize / this.uploadFile.maxSize
        if (!imageFile.type.match('image.*')) {
          this.uploadFile.isError = true
          this.$toast.error('Veuillez choisir un fichier image.', {
            icon: 'mdi-alert-circle-outline',
          })
        } else if (size < 0) {
          this.$toast.error(
            'Votre fichier est trop gros ! Veuillez sélectionner une image de moins de 500kb.',
            {
              icon: 'mdi-alert-circle-outline',
            }
          )
        } else {
          const formData = new FormData()
          this.imgSrc = URL.createObjectURL(imageFile)
          formData.append(imageFile.name, imageFile)
          console.log('formData2:', formData)
          this.imageFile = imageFile
        }

        this.isLoading = false
      }
    },
  },
}
