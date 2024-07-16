var video = Array()

video[1] = Array()
video[1]['Nome'] = 'Fullmetal Alchemist'
video[1]['Categoria'] = 'Anime'

function getVideo(video) {
    try {
        console.log(video[0]['Nome'])
    } catch (erro) {
        console.log(erro)
        console.log('Agora podemos tratar esse erro')
        throw new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso agora!!!')
    }
    finally {
        console.log('Sempre passa por aqui(try/ cat)')

    }
    console.log('A aplicação não Morreu')
}
getVideo(video)