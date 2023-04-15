import LinkA from "./LinkA";
import Head from "next/head";

const Container = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={'navbar'}>
                <LinkA href={'/'} text={'Main page'} />
                <LinkA href={'/users'} text={'Users page'} />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background: purple;
                    padding: 15px;
                  }
                `}
            </style>
        </>
    );
};

export default Container;