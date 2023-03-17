import Follower from './components/Follower';
import { UseFetch } from './hooks/useFetch';
import { Hearts } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
function App() {
  const { data, loading } = UseFetch();

  const [page, setpage] = useState(0);
  const [followers, setfollowers] = useState([]);

  //RUNNING MY USEEFFECT TO RERUN

  useEffect(() => {
    if (loading) return;
    setfollowers(data[page]);
  }, [data, page, loading]);

  //BUTTONS FUNCTIONALITY

  const handlepage = (index) => {
    setpage(index);
  };

  //prev,after

  const handleNext = () => {
    // if (loading) return;
    setpage((index) => {
      let newIndex = index + 1;
      if (newIndex > data.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };
  const handlePrev = () => {
    // if (loading) return;
    setpage((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = data.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <main>
      <div className="section">
        <div className="section_loading">
          <h1 className="section_loading_TEXT">
            {' '}
            {loading ? (
              <Hearts
                height="170"
                width="170"
                color="#4fa94d"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              'PAGINATION'
            )}
          </h1>
        </div>

        <div className="section_content">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn_pagination">
            <button onClick={handlePrev} className="btn_pagination_before">
              PREV
            </button>
            {data.map((item, index) => {
              console.log(item);
              return (
                <button
                  onClick={() => {
                    handlepage(index);
                  }}
                  className={`btn_pagination_btn ${
                    page === index && 'active'
                  } `}
                  key={index}
                >
                  {index + 1}
                </button>
              );
            })}
            <button onClick={handleNext} className="btn_pagination_after">
              NEXT
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
