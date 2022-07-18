import { describe, expect, it, beforeEach } from 'vitest'
import { dateFormat } from '../common/utils'
import { render, localServerAddress, mockGet } from '../../test-setup/test-utils'
import appConstants from '../common/constants'
import { apiServer } from '../api/baseApi'
import { fireEvent, getByText, waitFor } from '@testing-library/dom'


describe('NavComponent', () => {

    beforeEach(async () => {
        await import('./index')

    })

    it('check NavComponent creating', () => {
        render(`<main-nav type="${appConstants.search.types.post}" ></main-nav>`)
        expect(document.querySelector('main-nav')).toBeInTheDocument()
    })

    it('check NavComponent structure', () => {
        render(`<main-nav type="${appConstants.search.types.post}" ></main-nav>`)
        const shadow = document.querySelector('main-nav').shadowRoot
        expect(shadow).not.toBeNull()
        const links = shadow.querySelectorAll('nav-link')
        expect(links.length).toBe(3)

        const link1 = links[0].shadowRoot.querySelector('a')
        expect(link1.href).toEqual(`${localServerAddress}${appConstants.routes.index}`)
        expect(link1.textContent).toEqual('Home')

        const link2 = links[1].shadowRoot.querySelector('a')
        expect(link2.href).toEqual(`${localServerAddress}${appConstants.routes.posts}`)
        expect(link2.textContent).toEqual('Posts')

        const link3 = links[2].shadowRoot.querySelector('a')
        expect(link3.href).toEqual(`${localServerAddress}${appConstants.routes.users}`)
        expect(link3.textContent).toEqual('Users')

    })

    it('check NavComponent onClick', () => {
        render(`<main-nav type="${appConstants.search.types.post}" ></main-nav>`)
        const shadow = document.querySelector('main-nav').shadowRoot
        expect(shadow).not.toBeNull()

        //check posts link
        const postLink = shadow.querySelector('.posts-link')
        expect(postLink).toBeInTheDocument()
        const mockGetPosts = mockGet(`/posts?_page=1&limit=10`).willResolve({ "results": [{ "id": "724d3376-30a8-4120-9838-b6a672d82143", "title": "Fox Lion Tongue Negative Sent", "text": "Fair game our cool occasionally wood dance quiet. Several secret solve please food yellow depend family. Development difficulty crop purpose article poet given river. President table breathe produce sell board page by. Noise volume larger sick felt equal paint probably. Breath which prove position classroom roll climate coal mail up ants supper perfect scientist valuable. Number wild opportunity we receive take property understanding giving us dig football transportation student trouble. Drove somewhere why changing official truth felt cold weather beneath learn supply finest fun store", "createdAt": "2013-01-01T16:46:49.584Z", "user": { "id": "70536a67-1e89-4ac4-a1cb-d9b94db3dd49", "user_name": "decoy.stupid", "user_fullname": "Decoy Stupid" } }, { "id": "7b4cec4c-562c-495b-bd76-c2f98c20a9d6", "title": "Second Brief Seen Pure Valley", "text": "Hardly needs egg according trunk field plates hunt. Small began log ready next forest green store standard collect silence sets town felt blanket. Harbor ran hardly you size sides nice until changing real planet fur sight evening ahead. Exactly floor recognize middle wet school excellent turn. Solid letter bring gain whale date powder sugar. Glass beauty younger motion club spider travel weak. Mice where what swing out crew depth grass. Red motor drop world ask something asleep steel thought advice shout slide bet difference form", "createdAt": "2015-08-03T10:15:43.540Z", "user": { "id": "bb229488-0f97-473b-a4fb-5ebc22c6f134", "user_name": "henchman.aggravated", "user_fullname": "Henchman Aggravated" } }, { "id": "5bf37010-feb0-437c-b7b5-9d534bbd010d", "title": "Sleep Level Letter Earlier Fruit", "text": "Gas tube smooth exactly daughter giant physical is boy gather population correct short red want. Angle actual ready met speech night noun forth. Giant appearance indeed range ready back freedom unit. News zipper especially noise gain desk yellow rhyme possibly smell behind win rose shot deer. Official accident film course enter blow explore each. Thou chapter whose walk stone mind ahead recently. Foot mood brave measure cloud outer age pictured. Prevent single prove highway arrange manufacturing rice opposite shadow positive rear lying full breathing motor", "createdAt": "2016-10-26T05:11:54.212Z", "user": { "id": "b5e12e89-6360-48eb-a944-8b86a9d56f2c", "user_name": "bakery.suspicious", "user_fullname": "Bakery Suspicious" } }, { "id": "ce9f59ef-7c46-477c-bc9b-c54a8a18d5ba", "title": "Train No Engineer Dot Adventure", "text": "Mind announced quick rhyme than lady mother labor. News he atomic apartment expect yellow exist bit plural happen wall shout structure tent outer. Slow previous halfway swept fur apartment silence ago. Middle tea open phrase speech foreign top ride. Moment idea south smile meet typical locate ants. Train satisfied zero leather ability available stream hardly zipper dawn present package gift where disappear. Join shape previous silk additional stop girl mind sale hold poet composed like warm language. Weigh your bread support zebra us offer amount", "createdAt": "2017-06-01T06:08:55.028Z", "user": { "id": "50252ef5-2def-46ae-a17b-5ae61be9548c", "user_name": "landowner.ornate", "user_fullname": "Landowner Ornate" } }, { "id": "108a3498-71a0-4181-a4e8-1abcce8cb52c", "title": "Flower Supper Dear Aid Exactly", "text": "Respect scale temperature instance slowly cook fly cap badly spread those feed at detail ahead. Watch offer whole organized halfway instant thread adventure. News shown seat comfortable mean race magnet children name together carbon remain forest swept rush. Some length metal fire enemy race chief root simply muscle center cool angle dear thread. Stand guess wild press cap edge eaten made. Tail corner news dirty chapter gain speed bowl. Best tobacco railroad gone running spin may today. Sold stems hurt call probably topic ourselves thing", "createdAt": "2017-11-15T17:21:31.740Z", "user": { "id": "a3c9bad2-7281-49bd-ad57-308b8cb4a623", "user_name": "faculty.extreme", "user_fullname": "Faculty Extreme" } }, { "id": "fbdc14aa-131c-4c76-a1df-47db47191fbd", "title": "Around Manner Quarter Half Properly", "text": "Science selection himself potatoes bound trail helpful should. Favorite near field traffic sheep sitting pine start. Hungry journey post father progress cannot wheel tribe. Him instant truth importance sense even farmer clear. Fruit freedom broke nuts surface ordinary selection fine mental fact doll step airplane shadow branch. Income clothing outline talk blue except snake flow none thank table running night one grandfather. Signal upper you police value entirely brain express. Subject branch step whale subject bottom there softly hearing previous since if grow region join", "createdAt": "2018-05-04T07:48:57.467Z", "user": { "id": "02a667a6-16e1-480e-8968-866d5f231ac7", "user_name": "swivel.premium", "user_fullname": "Swivel Premium" } }, { "id": "b9766e98-d4ce-4471-8934-3adc9d756a87", "title": "Opinion Play Pan Truck Driving", "text": "Electricity enter excitement stop court know same disease. Attention past studied surrounded became tribe government firm. Find driven magnet river ago friend rapidly city smaller point wore record building ring gravity. Season rabbit instance locate purple cover sink author read factor ants compass locate clothing trace. Broken strength himself sink program prevent want using fifteen obtain into gasoline offer action night. Root strength bottom electric rain sheet even dawn. Fuel torn consider skin chart flies usually fine. Prove under told tide sport worried cross fighting", "createdAt": "2018-08-14T18:37:05.152Z", "user": { "id": "83f20837-f94f-429f-841b-57e83847b5f5", "user_name": "artist.momentous", "user_fullname": "Artist Momentous" } }, { "id": "700acd0b-dd13-4721-8e24-5268794765ee", "title": "Thin Band Function Forty Six", "text": "Soldier quiet sudden freedom milk sign forty sets. Acres powerful accept particularly beyond butter price definition. Were arrow giving dried chest evening twelve missing. Mountain ride lost each me practical hunter general. Ship avoid slightly hollow fierce someone me detail military avoid tide tall putting sick close. By whom struck once grain paid minute special against cage longer putting hurried occasionally fruit. Size behind rear mother series tax usually do. Aboard compare carried both troops end sunlight hope rate scientist organized ill swing figure oxygen", "createdAt": "2019-04-18T05:52:42.132Z", "user": { "id": "33a607e6-c783-44bb-93f5-3e98301fdc7d", "user_name": "fund.sweet", "user_fullname": "Fund Sweet" } }, { "id": "15324bb1-4bf8-4b51-b4d1-fbb5441ed423", "title": "Instant Announced Stood Tape Organization", "text": "Purple equal largest simple article my bottom almost breeze oil produce closely ocean brown left. Garden brush income private throw citizen expression far. Living planning black hurried prepare jack shadow writer. Map wife land orange victory parallel volume physical party except bet bean television perfect glass. Value yes eight enough iron writing whispered notice. Map home rose particular imagine warn lovely best. Route shinning hurry plan travel captured parent stuck able yellow either does born sent raw. Loose unusual chose however fast grabbed effect birds", "createdAt": "2020-08-19T00:20:33.406Z", "user": { "id": "48be73e2-b0fd-4065-91ac-1147301ffe57", "user_name": "co-author.crystalline", "user_fullname": "Co-author Crystalline" } }, { "id": "0c76f872-7461-42cf-9a90-96cc503ed187", "title": "Pine Year Distance Imagine Certainly", "text": "Dirt discussion quickly fill term piano principal solid quarter willing went jump level view attached. Case due part tree new sad carefully gentle. Location pass particularly from trip series lamp felt. Sell road anywhere band what boy refused thee add told provide spin lower satisfied sale. Make closely symbol room blind hot drive afternoon public physical fog among large save hung. Crew driver fighting flat ate round this were. Circus hall tune enemy curve greater lie contain. Fight position sweet supper including me mass nervous", "createdAt": "2021-09-25T08:53:59.111Z", "user": { "id": "bb0243c4-4cf4-4b67-8457-6cc04721f692", "user_name": "steelworker.inaccessible", "user_fullname": "Steelworker Inaccessible" } }], "pagination": { "totalCount": 300, "limit": 10, "page": 1 } })

        fireEvent.click(postLink.shadowRoot.querySelector('a'))
        expect(mockGetPosts).toHaveFetchedTimes(1)

        const postsList = document.querySelector('list-component')
        expect(postsList).toBeInTheDocument()
        expect(getByText(postsList.shadowRoot, 'All posts')).toBeInTheDocument()

        // check users list
        const shadow2 = document.querySelector('main-nav').shadowRoot
        const userLink = shadow2.querySelector('.users-link')
        expect(userLink).toBeInTheDocument()
        const mockGetUsers = mockGet(`/users?_page=1&limit=10`).willResolve({ "results": [{ "id": "0bf024fd-189d-403e-b7bc-e2b23d9333e6", "user_name": "bleacher.nautical", "user_fullname": "Bleacher Nautical" }, { "id": "e64a1bf3-cc5b-4607-8851-65798097cd77", "user_name": "proposition.instant", "user_fullname": "Proposition Instant" }, { "id": "50252ef5-2def-46ae-a17b-5ae61be9548c", "user_name": "landowner.ornate", "user_fullname": "Landowner Ornate" }, { "id": "5a18f004-5046-47a5-a8c1-72b6ef117b8a", "user_name": "dialectic.lawless", "user_fullname": "Dialectic Lawless" }, { "id": "b881d6d8-ae90-42c9-b1d8-e859adae1deb", "user_name": "absurdist.lewd", "user_fullname": "Absurdist Lewd" }, { "id": "5dc2df36-77e5-4063-9594-a88bc3e2dfea", "user_name": "rigging.raucous", "user_fullname": "Rigging Raucous" }, { "id": "44b408f7-0e3d-4b70-b908-5e3853df062b", "user_name": "roof.expensive", "user_fullname": "Roof Expensive" }, { "id": "25a0b14c-5a12-4ba6-a79f-a903820129a7", "user_name": "felon.flying", "user_fullname": "Felon Flying" }, { "id": "cdb6212c-3e92-4566-ab71-e14ea4f790e3", "user_name": "barbarity.balanced", "user_fullname": "Barbarity Balanced" }, { "id": "2935584d-73b8-455c-9f91-33a5c5bd5c2b", "user_name": "grocery.rueful", "user_fullname": "Grocery Rueful" }], "pagination": { "totalCount": 100, "limit": 10, "page": 1 } })

        fireEvent.click(userLink.shadowRoot.querySelector('a'))
        expect(mockGetUsers).toHaveFetchedTimes(1)

        const usersList = document.querySelector('list-component')
        expect(usersList).toBeInTheDocument()
        expect(getByText(usersList.shadowRoot, 'All users')).toBeInTheDocument()

        //check open main page

        const shadow3 = document.querySelector('main-nav').shadowRoot
        const homeLink = shadow3.querySelector('.home-link')
        expect(homeLink).toBeInTheDocument()

        fireEvent.click(homeLink.shadowRoot.querySelector('a'))

        expect(getByText(document.body, 'Top block 1')).toBeInTheDocument()
        expect(document.body.querySelectorAll('.block').length).toBe(66)
    })

    it('test NavComponent check search posts', async () => {
        render(`<main-nav type="${appConstants.search.types.post}" ></main-nav>`)
        const textToSearch = '___search text___'
        const shadow = document.querySelector('main-nav').shadowRoot
        const search = shadow.querySelector('.global-search')
        expect(search).toBeInTheDocument()
        const mockGetSearchPosts = mockGet(`/posts?search=${textToSearch}&_page=1&limit=10`).willResolve({
            "results": [
                {
                    "id": "72aefe65-23b3-4d0d-b881-758383551f72",
                    "title": "Plastic Test Express Began Evening",
                    "text": `Soft ride press she thin queen mind ${textToSearch} ranch fear whenever freedom instance jump explore whenever. Airplane political dust sugar skin support outside average. Watch earn failed began your against unknown whom. Impossible corner flag news flag larger shut coast. Author land tide slow piece solid zipper built. Primitive score own cloth exercise minerals fought shot. Here race stared constantly clear strange apple available went shall motor group thing blank magnet. Mine married slave milk shape plain master why president largest charge putting jet want tales`,
                    "createdAt": "2013-12-17T10:09:59.370Z",
                    "user": {
                        "id": "32fa6d2d-78a3-434c-9159-4d93dea01093",
                        "user_name": "malfunction.standardized",
                        "user_fullname": "Malfunction Standardized"
                    }
                }], "pagination": { "totalCount": 1, "limit": 10, "page": 1 }
        })
        fireEvent.change(search, {target: {value: textToSearch}})
        fireEvent.keyUp(search, {key: 'Enter', code: 'Enter', charCode: 13})
        expect(mockGetSearchPosts).toHaveFetchedTimes(1)

        const listShadow = document.querySelector('list-component').shadowRoot
        expect(listShadow).not.toBeNull()
        
        await waitFor(() => expect(listShadow.querySelector('post-component')).toBeInTheDocument())
        
        const postShadowRoot = listShadow.querySelector('post-component').shadowRoot
        expect(postShadowRoot).not.toBeNull()
        expect(postShadowRoot.querySelector('.post-block')).toBeInTheDocument()
        expect(getByText(postShadowRoot.querySelector('.post-block'), 'Plastic Test Express Began Evening')).toBeInTheDocument()
        expect(postShadowRoot.querySelector('span.highlight')).toBeInTheDocument()
        expect(postShadowRoot.querySelector('span.highlight').textContent).toEqual(textToSearch)
    })

    it('test NavComponent check search users', async () => {
        render(`<main-nav type="${appConstants.search.types.user}" ></main-nav>`)
        const textToSearch = '___search text___'
        const shadow = document.querySelector('main-nav').shadowRoot
        const search = shadow.querySelector('.global-search')
        expect(search).toBeInTheDocument()
        const mockGetSearchUsers = mockGet(`/users?search=${textToSearch}&_page=1&limit=10`).willResolve({
            "results": [
                {
                    "id": "9e2e57a0-4d94-47d6-9cb9-2190e86218c4",
                    "user_name": "raconteur.washed",
                    "user_fullname": `Raconteur ${textToSearch} Washed`
                }
                ], "pagination": { "totalCount": 1, "limit": 10, "page": 1 }
        })
        fireEvent.change(search, {target: {value: textToSearch}})
        fireEvent.keyUp(search, {key: 'Enter', code: 'Enter', charCode: 13})
        expect(mockGetSearchUsers).toHaveFetchedTimes(1)

        const listShadow = document.querySelector('list-component').shadowRoot
        expect(listShadow).not.toBeNull()
        
        await waitFor(() => expect(listShadow.querySelector('user-component')).toBeInTheDocument())
        
        const userShadowRoot = listShadow.querySelector('user-component').shadowRoot
        expect(userShadowRoot).not.toBeNull()
        expect(userShadowRoot.querySelector('.user-block')).toBeInTheDocument()
        expect(getByText(userShadowRoot.querySelector('.user-block'), 'raconteur.washed')).toBeInTheDocument()
        expect(userShadowRoot.querySelector('span.highlight')).toBeInTheDocument()
        expect(userShadowRoot.querySelector('span.highlight').textContent).toEqual(textToSearch)
    })
})