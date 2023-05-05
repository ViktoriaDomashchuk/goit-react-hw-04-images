import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <ThreeDots 
height="80" 
width="80" 
radius="9"
color="rgb(115, 149, 174)" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
  );
};