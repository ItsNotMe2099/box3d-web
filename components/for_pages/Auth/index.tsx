import Icon3DSvg from '@/components/svg/Icon3DSvg'
import styles from './index.module.scss'
import Image from 'next/image'
import { colors } from '@/styles/variables'
import Box3DSvg from '@/components/svg/Box3DSvg'
import AuthForm from './Form'

interface Props {

}


export default function Auth(props: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Image src={'/img/boxes.svg'} alt='' fill />
        <div className={styles.item}>
          <Icon3DSvg color={colors.dark500} />
          <Box3DSvg color={colors.dark500} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            Вход на сайт
          </div>
          <AuthForm className={styles.form} />
        </div>
      </div>
    </div>
  )
}
