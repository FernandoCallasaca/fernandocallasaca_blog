import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { withPrefix, classNames } from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.handleVideoEmbeds = this.handleVideoEmbeds.bind(this);
    }

    componentDidMount() {
        this.handleVideoEmbeds();
    }

    componentDidUpdate() {
        this.handleVideoEmbeds();
    }

    handleVideoEmbeds() {
        const videoEmbeds = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];
        noframe(videoEmbeds.join(','), '.inner-sm');
    }

    render() {
        const page = _.get(this.props, 'page');
        const pageTitle = _.get(page, 'title');
        const config = _.get(this.props, 'config');
        const configTitle = _.get(config, 'title');
        const colorScheme = _.get(config, 'color_scheme', 'light');
        const accentColor = _.get(config, 'accent_color', 'pink');
        const favicon = _.get(config, 'favicon');
        const domain = _.trim(_.get(config, 'domain', ''), '/');

        const seo = _.get(page, 'seo');
        const seoImage = _.get(page, 'thumb_image');
        const seoTitle = _.get(seo, 'title');
        const seoUrl = _.get(page, 'url');
        const seoDescription = _.get(page, 'subtitle');
        const title = seoTitle ? seoTitle : [pageTitle, configTitle].join(' | ');
        const description = seoDescription
            ? seoDescription
            : 'Data Scientist - Data Analytics - Machine Learning - Statistics - Startups - Emprendimiento - Software Engineer - Web Developer - 🇵🇪';
        const ogImage = seoImage ? seoImage : 'images/fernando_profile.jpg';
        const url = seoUrl ? `https://fernandocallasaca.com/${seoUrl}` : 'https://fernandocallasaca.com/';
        const seoRobots = _.get(seo, 'robots', []).join(',');
        const seoExtra = _.get(seo, 'extra', []).map((meta, index) => {
            const keyName = _.get(meta, 'keyName', 'name');
            const name = _.get(meta, 'name');
            if (!name) {
                return null;
            }
            const nameAttr = { [keyName]: name };
            const relativeUrl = _.get(meta, 'relativeUrl');
            let value = _.get(meta, 'value');
            if (!value) {
                return null;
            }
            if (relativeUrl) {
                if (!domain) {
                    return null;
                }
                value = domain + withPrefix(value);
            }
            return <meta key={index} {...nameAttr} content={value} />;
        });

        return (
            <React.Fragment>
                <Helmet>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={description} />
                    {!_.isEmpty(seoRobots) && <meta name="robots" content={seoRobots} />}
                    {seoExtra}
                    <link href="https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/favicon/favicon.ico" />
                    {favicon && <link rel="icon" href={withPrefix(favicon)} />}
                    <meta name="description" content={description} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@fcallasaca" />
                    <meta name="twitter:creator" content="@fcallasaca" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={ogImage} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={ogImage} />
                    <meta property="og:url" content={url} />
                    <meta property="og:site_name" content={title} />
                    <meta property="og:locale" content="es_ES" />
                    <meta property="og:type" content="article" />
                    <link rel="manifest" href="/manifest.json" />

                    <body className={classNames(`palette-${colorScheme}`, `accent-${accentColor}`)} />
                </Helmet>
                <div id="page" className="site">
                    <Header page={page} config={config} />
                    <main id="content" className="site-content">
                        {this.props.children}
                    </main>
                    <Footer config={config} />
                </div>
            </React.Fragment>
        );
    }
}
