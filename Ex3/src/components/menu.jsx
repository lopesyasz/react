import './css/menu.css'
function Menu() {
    return (
      <>
        <header className="navbar navbar-dark bg-primary  ">

        <div class="container-fluid  d-flex justify-content-around">
				<a class="navbar-brand h1" href="/">
					<img src="https://cdn-icons-png.flaticon.com/512/1909/1909539.png" className='img' alt="programadorbr Logo"></img>
				</a>

				<div  class="">
					<ul class="navbar-nav d-flex flex-row">
						<li class="nav-item ms-2"><a class="nav-link" href="/"> Home</a></li>
						<li class="nav-item ms-2"><a class="nav-link" href="/contato"> Contato</a></li>
						<li class="nav-item ms-2"><a class="nav-link" href="/sobre"> Sobre</a></li>
					</ul>
				</div>

			</div>

        </header>
      </>
    )
  }
  
  export default Menu