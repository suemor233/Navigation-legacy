import { defineComponent } from 'vue'
import './index.modules.scss'
import Icon from '@/components/Icon'
import { useUser } from '@/store/user'

export default defineComponent({
  setup(props, ctx) { //
    const { user } = useUser()
    return () => (
      <>
        <div class={'card-left'}>
          <div class={'card-wrapper'}>
            <div class={'card-avatar'}>
              <img src={user.avatar} alt="" />
            </div>
            <p class={'card-name'}>{user.username}</p>
            <p class={'card-introduce'}>{user.introduce}</p>
            <div class={'card-icon'}>
              {user.social.middle.map((item) => {
                return (
                  <>
                    <a target={'view-windows'} href={item.url}>
                      <Icon name={item.icon} />
                    </a>
                  </>
                )
              })}
            </div>
            <div class="card-button">
              <a target={'view-windows'} href="https://suemor.com">
                <Icon name={'icon-boke1'} />
                <span>Blog</span>
              </a>
              <a target={'view-windows'} href="https://github.com/suemor233">
                {' '}
                <Icon name={'icon-github'} />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  },
})
