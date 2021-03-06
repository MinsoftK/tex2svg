FROM debian:buster
FROM ruby:2.6

RUN echo "deb http://deb.debian.org/debian buster main" > /etc/apt/sources.list
RUN echo "deb-src http://deb.debian.org/debian buster main" >> /etc/apt/sources.list

RUN apt update -y && apt install -y \
    rake rubygems pdf2svg texlive-latex-base\
    texlive-pictures \
    texlive-fonts-recommended xzdec \
    texlive-fonts-extra \
    && rm -rf /var/lib/apt/lists/* && \
    gem update --system && gem update

#RUN tlmgr init-usertree && tlmgr install stix2-type1 \

RUN tlmgr init-usertree 
RUN tlmgr option repository ftp://tug.org/historic/systems/texlive/2018/tlnet-final
RUN tlmgr install \
    filemod ucs currfile varwidth adjustbox standalone
RUN updmap-sys

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
COPY ./config.yml.docker /usr/src/app/config.yml
RUN bundle config set path 'vendor/bundle' && bundle install
RUN useradd -m myuser && chown -R myuser:myuser /usr/src/app/tmp && \
    chmod 711 /root

EXPOSE 9292

USER myuser
ENV TEXMFHOME /root/texmf
CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0"]
