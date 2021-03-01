FROM node

ARG env
RUN if [ ${env} = "record" ]; then apt update \
        && apt install -y python3-pip \
        && pip3 install asciinema ; \
    fi
ENV LC_ALL=C.UTF-8

ARG APP_DIR=brain-games
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

ENV NODE_ENV=production

COPY package*.json .
RUN yarn install
COPY . .
RUN yarn link
