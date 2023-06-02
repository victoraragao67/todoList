import { ClipboardText, PlusCircle } from "phosphor-react"
import styles from "./List.module.css"
import { useState } from "react";
import { OrganizacaoLista } from "./OrganizacaoLista";


export function ToDoList() {

    const [listaDeAtividades, setListaDeAtividades] = useState([])
    const [novoToDoList, setNovoToDoList] = useState('')


    function handleToDoList() {
        event.preventDefault()

        setListaDeAtividades([...listaDeAtividades, novoToDoList]);
        setNovoToDoList('');
    }

    function handleNovoItem() {
        event.target.setCustomValidity('');
        setNovoToDoList(event.target.value);
    }

    function deleteToDo(AtividadeDeletada) {
        const AtividadeWithOutDeleteOne = listaDeAtividades.filter(listaDeAtividades => {
            return (
                listaDeAtividades != AtividadeDeletada
            )
        })
        setListaDeAtividades(AtividadeWithOutDeleteOne);

    }

    return (
        <>
            <form onSubmit={handleToDoList}
                className={styles.novaTarefa}>
                <textarea
                    required
                    name="list"
                    value={novoToDoList}
                    onChange={handleNovoItem}
                    placeholder="Adicione uma nova tarefa"
                />
                <button >
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>
            <div className={styles.topicosList}>
                <span className={styles.topicosListCriadas}>
                    Tarefas criadas
                    <span className={styles.topicosListCount}> {listaDeAtividades.length} </span>
                </span>
                <span className={styles.topicosListConcluidas}>
                    Concluídas
                    <span className={styles.topicosListCount}> {listaDeAtividades.length}</span>
                </span>
            </div>
            {listaDeAtividades.length > 0 ?
                listaDeAtividades.map(toDo => {
                    console.log(toDo)
                    return (
                        <div className={styles.listaVazia} key={toDo}>
                            <OrganizacaoLista
                                task={toDo}
                                OnDeleteAtividade={deleteToDo}
                            />
                        </div>
                    )
                }) :
                <div className={styles.listaVazia}>
                    <ClipboardText size={56} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie e organize seus itens a fazer</span>
                </div>

            }

        </>


    )
}