export default function Perfil() {
    return (
        <div className="flex items-center gap-2">
            <img src="../imgs/img-perfil.png" className='h-8 rounded' />
            <svg class="w-3 h-3 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
            </svg>
        </div>
    )
}