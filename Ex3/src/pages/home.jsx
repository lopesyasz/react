import Menu from '../components/menu'
import Rodape from '../components/rodape'
import './css/home.css'
import montenegro from './card images/montenegro.png'
import pera from './card images/marilia.png'

function Home() {
    return (
      <>
      <Menu/>

      <div className="body container-fluid d-flex flex-column " style={{ minHeight: '100vh' }}>
        <div className="row h-100">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={montenegro} className="card-img-top" alt="Atriz Fernanda Montenegro" />
              <div className="card-body">
                <h5 className="card-title">Fernanda Montenegro</h5>
                <p className="card-text">Fernanda Montenegro, ícone da dramaturgia brasileira, nasceu em 16 de outubro de 1929 no Rio de Janeiro. Sua carreira notável abrange mais de sete décadas, consolidando-a como uma das atrizes mais respeitadas do país. Montenegro começou no teatro e rapidamente expandiu seu talento para o cinema e a televisão. Sua versatilidade é evidente em papéis que vão desde tragédias clássicas até comédias contemporâneas. Vencedora de inúmeros prêmios, incluindo o Urso de Prata em Berlim e uma indicação ao Oscar, sua interpretação marcante no filme "Central do Brasil" emocionou o mundo. Além de sua contribuição artística, Fernanda é reconhecida por sua postura discreta e elegante, tornando-se um exemplo de dedicação à arte e profissionalismo. Seu legado transcende gerações, inspirando novos talentos e solidificando seu lugar como uma verdadeira lenda viva da cultura brasileira.
                </p>
              </div>
            </div>
          </div>

        

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={pera} className="card-img-top" alt="atriz Marilia Pera" />
              <div className="card-body">
                <h5 className="card-title">Marilia Pera</h5>
                <p className="card-text">Marília Pêra, nascida em 22 de janeiro de 1943 e falecida em 5 de dezembro de 2015, foi uma atriz, cantora e diretora brasileira de destaque. Sua carreira multifacetada abrangeu teatro, cinema e televisão, conquistando reconhecimento nacional e internacional. Com sua voz poderosa e presença magnética, Marília brilhou em produções musicais, destacando-se em espetáculos como "Hair" e "O Homem de La Mancha". No cinema, participou de filmes icônicos como "Pixote" e "Dona Flor e Seus Dois Maridos". Na TV, suas atuações em novelas como "Tieta" e "Roque Santeiro" a consagraram como uma das maiores atrizes da teledramaturgia brasileira. Além de seu talento artístico, Marília Pêra foi uma mulher de personalidade forte e engajamento cultural, deixando um legado duradouro na história das artes no Brasil.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow-1"></div>

        <Rodape/>
      </div>
      </>
    )
}

export default Home
