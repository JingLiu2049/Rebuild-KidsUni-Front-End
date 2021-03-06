import { Suspense} from 'react'
import { Redirect, Switch, Route} from 'react-router-dom';
import { Layout } from 'antd';

import  memoryUtil  from '../../utils/memoryUtil'
import SideNav from '../../components/SideNav';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import contentPageList from '../../configs/contentPagesConfig';
import './home.less'


export default function Home(props) {
    const {Footer, Sider, Content } = Layout;
    const user = memoryUtil.user;
    if (!user || !user._id) return <Redirect to="/login" />
        
    return (
      
        <Layout className='layout' style={{ minHeight: '100%'}}>
      <Sider className='sider' width="4rem"  >
          <SideNav />
      </Sider>
      <Layout >
        <Header />
        <Content style={{backgroundColor:'#EDF2F3'}}>
          <div style={{backgroundColor:'white', padding:'0 20px', minHeight: '100%'}}>
          <Suspense fallback={ <Loading/> } >
          <Switch>
            {
              contentPageList.map(item=>{
                return(
                  <Route path={item.path} component= {item.component} key={item.key}/> 
                )
              })
            }
            <Redirect exact from="/"  to="/dashboard" />
          </Switch>
          </Suspense>
          </div>
        </Content>
        <Footer style={{height:'30px'}} >Footer</Footer>
      </Layout>
    </Layout>
    )

}