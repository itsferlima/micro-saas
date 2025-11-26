export default function Hero(){
    return(
        <div className="flex border">
            <div className="w-full flex flex-col gap-2 mt-135wl">
                <h1 className="text-5xl font-blod text-white loading-[64px]"> 
                    Seus projetos e redes sociais em um unico link</h1>
                <h2 className="text-xl leading-6">Crie sua propria pagine de projetos
                    <h3>Acompanhe o engajamento com analytics de clicks</h3></h2>
                <div className="flex items-center gap-2 w-full -mt-[10vh]">
                    <span className="text-white text-xl">project.com</span>
                    <input type="text"/>
                    <button>Cliar agora </button>
                </div>
            </div>
            <div className="w-full flex items-center justify-center"></div>
            <div className="relative">
                <div className="absolute-boton-[7%]-right-[45%]"></div>
                <div className="absolute top-[20%]"></div>
            </div>
        </div>
    )
}