import mock from 'mbti_color\src\data\mock.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function main() {
    const [filter, setFilter] = useState(null);
    return (
        <div>
            <h1>MBTI별 좋아하는 컬러</h1>
            <div>
                <Link to="/new">+ 새 컬러 등록하기</Link>
                <ul>
                    {mock.map((item) => (
                        <li key={item.id}>
                            {item.id} {item.mbti} --- {item.colorCode}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;