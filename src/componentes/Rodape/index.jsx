import './Rodape.css';

const Rodape = () => {
  return ( 
    <footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank'>
                        <img src='/imagens/fb.png' alt='btn facebook' />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target='_blank'>
                        <img src="/imagens/tw.png" alt="btn twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="btn instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section className='logo'>
            <img src='/imagens/logo.png' alt='logo Organo' />
        </section>
        <section className='desenvolvido'>
            <p>Desenvolvido por Alura e Marcello Prado Muller</p>
        </section>
    </footer>
  )
}

export default Rodape