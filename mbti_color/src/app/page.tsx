import { BrowerRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//페이지 라우팅 설정
export default App;