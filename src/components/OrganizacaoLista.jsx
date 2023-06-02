
import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from "./OrganizacaoLista.module.css"
import { useState } from 'react'

export function OrganizacaoLista(props) {

    const [marcarAtividade, setMarcarAtivade] = useState(false)

    function handleDeletarAtividade() {
        props.OnDeleteAtividade(props.task)

    }

    function handleMarcarAtividade() {
         marcarAtividade ?
        setMarcarAtivade(false)
        :
        setMarcarAtivade(true)
    }


    return (

        <div className={styles.atividades}>
            <header >
                <div className={styles.atividadesListadas}>
                    {marcarAtividade ?
                        <>
                            <button
                                onClick={handleMarcarAtividade}
                            >
                                <CheckCircle size={20} />
                            </button >
                            <span>{props.task}</span>
                        </>
                        :
                        <><button
                            onClick={handleMarcarAtividade}>
                            <Circle size={20} color='#4EA8DE'/>
                        </button>
                            <p>{props.task}</p>
                        </>
                    }

                </div>

                <button
                    title='Deletar'
                    onClick={handleDeletarAtividade}
                >
                    <Trash size={20} />
                </button>
            </header>

        </div>
    )
}