import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState (0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment (){
            setLikeCount((state) =>{
            return state + 1
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src='https://github.com/Vinivgm.png' 
                alt='' 
                
            />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Vinicius Medeiros</strong>
                        <time title='25 de julho às 20:40 ' dateTime='2023-05-07 20:35:00'>Publicado há 1h</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
              
                
        </div>
    )
}