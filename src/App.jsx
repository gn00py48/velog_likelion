import { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #F4F4F4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  * {
    display: flex;
    flex-direction: column;
    flex-wrap: "wrap";
    gap: 18px;
  }
  
`;

const Content = styled.div`
width: 100%;
  *{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const TopNavBar = styled.div`
width: 100%;

  display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center; 
  .icon{
    width: 24px;
    height: 24px;
  }
  .velog_icon{
    width: 100px;
    height: 24px;
  }

  .box{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }
  .login{
    width: 80px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    border-radius: 25px;
    font-size: 10px;

  }
  *{
    margin-top: 10px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
  }
`;
const MenuBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center; 
  margin: 10px;

  .MenuLeft, .recent, .feed{
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    gap: 5px;
    color: #868e96;
  }
  .trending{
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    gap: 5px;
    padding-bottom: 5px;
    border-bottom: 2px solid black;
    color: black;
    font-weight: 700;
  }

  .MenuRight{
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    gap: 10px;
  }
`;


const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TopNavBar>
          <svg className="velog_icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 24"  data-testid="velog-logo" width="71" height="24"><path fill="currentColor" d="M12.248 5.328 7.76 18H4.64L.152 5.328h2.904l3.192 10.44 3.24-10.44h2.76Zm5.51 7.2c.08 1.232.433 2.16 1.057 2.784.64.608 1.44.912 2.4.912.592 0 1.152-.088 1.68-.264a7.693 7.693 0 0 0 1.656-.84l1.152 1.632a6.443 6.443 0 0 1-2.088 1.152c-.8.272-1.64.408-2.52.408-1.936 0-3.44-.6-4.512-1.8-1.072-1.216-1.608-2.832-1.608-4.848 0-1.264.232-2.4.696-3.408.464-1.024 1.136-1.824 2.016-2.4.88-.576 1.904-.864 3.072-.864 1.68 0 3.008.568 3.984 1.704.992 1.12 1.488 2.664 1.488 4.632 0 .48-.024.88-.072 1.2h-8.4Zm3.025-5.544c-.864 0-1.568.312-2.112.936-.544.624-.856 1.552-.936 2.784h5.88c-.032-1.2-.288-2.12-.768-2.76-.48-.64-1.168-.96-2.064-.96Zm14.702 7.56c0 1.072.64 1.608 1.92 1.608.64 0 1.312-.144 2.016-.432l.672 1.872c-.88.48-1.968.72-3.264.72-1.264 0-2.256-.352-2.976-1.056-.704-.72-1.056-1.704-1.056-2.952V2.208h-3.816V.24h6.504v14.304Zm13.91-9.552c1.825 0 3.233.6 4.225 1.8.992 1.184 1.488 2.8 1.488 4.848s-.504 3.672-1.512 4.872c-1.008 1.2-2.416 1.8-4.224 1.8-1.824 0-3.24-.584-4.248-1.752-.992-1.184-1.488-2.816-1.488-4.896 0-2.016.504-3.632 1.512-4.848 1.024-1.216 2.44-1.824 4.248-1.824Zm0 2.088c-.975 0-1.711.376-2.207 1.128-.48.752-.72 1.904-.72 3.456 0 1.568.24 2.728.72 3.48.48.736 1.208 1.104 2.184 1.104.976 0 1.704-.376 2.184-1.128.48-.752.72-1.912.72-3.48 0-1.552-.24-2.696-.72-3.432-.48-.752-1.2-1.128-2.16-1.128Zm20.68-1.128a7.26 7.26 0 0 1-1.585.336c-.575.048-1.271.072-2.087.072.767.352 1.343.792 1.727 1.32.385.528.577 1.168.577 1.92 0 .832-.208 1.568-.624 2.208-.4.64-.977 1.144-1.728 1.512-.752.368-1.64.552-2.665.552-.72 0-1.295-.072-1.727-.216a1.311 1.311 0 0 0-.409.48 1.183 1.183 0 0 0-.144.576c0 .64.52.96 1.56.96h2.209c.895 0 1.695.152 2.4.456.704.304 1.248.728 1.632 1.272.4.528.6 1.128.6 1.8 0 1.264-.545 2.24-1.633 2.928-1.087.704-2.656 1.056-4.703 1.056-1.425 0-2.553-.152-3.385-.456-.816-.288-1.4-.72-1.752-1.296-.336-.56-.504-1.288-.504-2.184h2.4c0 .48.088.856.264 1.128.193.288.52.496.985.624.464.144 1.136.216 2.016.216 1.28 0 2.2-.16 2.76-.48.56-.304.84-.76.84-1.368 0-.512-.225-.912-.672-1.2-.433-.272-1.025-.408-1.777-.408h-2.184c-1.136 0-2-.232-2.592-.696-.576-.464-.864-1.048-.864-1.752 0-.432.12-.848.36-1.248s.585-.744 1.033-1.032c-.752-.4-1.304-.88-1.657-1.44-.336-.576-.504-1.28-.504-2.112 0-.88.225-1.656.672-2.328.448-.688 1.072-1.216 1.872-1.584.8-.384 1.712-.576 2.736-.576 1.377.016 2.465-.08 3.265-.288.816-.208 1.68-.536 2.591-.984l.697 2.232Zm-6.529.912c-.847 0-1.487.24-1.92.72-.431.464-.648 1.096-.648 1.896 0 .816.216 1.464.648 1.944.449.464 1.096.696 1.945.696.8 0 1.407-.232 1.823-.696.416-.464.624-1.128.624-1.992 0-1.712-.823-2.568-2.471-2.568Z"></path></svg>
          <div className="box">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-2h2v-7c0-1.383.417-2.612 1.25-3.688.833-1.075 1.917-1.779 3.25-2.112v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 12 2c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C17.583 7.388 18 8.617 18 10v7h2v2H4Zm8 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 20h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22Zm-4-5h8v-7c0-1.1-.392-2.042-1.175-2.825C14.042 6.392 13.1 6 12 6s-2.042.392-2.825 1.175C8.392 7.958 8 8.9 8 10v7Z"></path></svg>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m19.326 20.712-5.809-5.808a5.693 5.693 0 0 1-1.765.98 6.394 6.394 0 0 1-2.133.354c-1.849 0-3.414-.64-4.697-1.923C3.641 13.033 3 11.468 3 9.619c0-1.849.637-3.414 1.91-4.697C6.183 3.641 7.744 3 9.593 3c1.866 0 3.44.64 4.723 1.922 1.282 1.283 1.922 2.848 1.922 4.697 0 .75-.117 1.46-.352 2.132a6.052 6.052 0 0 1-.982 1.793l5.834 5.808a.888.888 0 0 1 .262.654c0 .261-.096.497-.288.706a.944.944 0 0 1-.693.288.945.945 0 0 1-.693-.288Zm-9.707-6.436c1.29 0 2.39-.453 3.297-1.36s1.36-2.006 1.36-3.297c0-1.308-.453-2.411-1.36-3.31-.907-.898-2.006-1.347-3.297-1.347-1.308 0-2.411.45-3.309 1.347-.898.899-1.348 2.002-1.348 3.31 0 1.29.45 2.39 1.348 3.297.898.907 2.001 1.36 3.31 1.36Z"></path></svg>
            <div className="login">
              로그인
            </div>
          </div>
        </TopNavBar>
        <MenuBar>
          <div className="MenuLeft">
            <div className="trending">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>
              트렌딩
            </div>
            <div className="recent">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
              최신
            </div>
            <div className="feed">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><circle cx="6.18" cy="17.82" r="2.18"></circle><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path></svg>
              피드
            </div>
          </div>
          <div className ="MenuRight">
            <div className="dropdown">
                <select id="timeframe" name="timeframe">
                    <option value="today" selected>오늘</option>
                    <option value="this_week">이번 주</option>
                    <option value="this_month">이번 달</option>
                    <option value="this_year">올해</option>
                </select>
            </div>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
          </div>
        </MenuBar>
        <Content>
          <Outlet />
        </Content>
      </Wrapper>
    </>
  );
};

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
