export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
               
                  <font size="6" color="#FFC900">{props.data ? props.data.subtitle : 'Loading'}</font>
                  <br/><br/><br/><br/>
                
                <p><b>{props.data ? props.data.paragraph : 'Loading'}<br/>{props.data ? props.data.paragraph2 : 'Loading'}</b></p>
                <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Contactanos
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
