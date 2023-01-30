FROM node:16 AS wst-ui-build
WORKDIR /usr/src/app
COPY wst-ui/ ./wst-ui/
RUN cd wst-ui && npm install && npm run build

FROM node:16 AS wst-api-build
WORKDIR /root/
COPY --from=wst-ui-build /usr/src/app/wst-ui/build ./wst-ui/build
COPY wst-api/package*.json ./wst-api/
RUN cd wst-api && npm install
COPY wst-api/server.js ./wst-api/

EXPOSE 3080

CMD ["node", "./wst-api/server.js"]